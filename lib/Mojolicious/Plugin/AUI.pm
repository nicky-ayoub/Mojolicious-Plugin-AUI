#===============================================================================
#
#         FILE: Mojolicious::Plugin::AUI.pm
#
# ABSTRACT: Mojolicious plugin to load Atlassian AUI JS and CSS
#
#       AUTHOR: nicky
#      CREATED: Thu Jun 26 11:09:27 EEST 2014
#
# This Mojolicious::Plugin is modeled after Mojolicious::Plugin::Humane by Joel Gerber
#===============================================================================
package Mojolicious::Plugin::AUI;

use Mojo::Base 'Mojolicious::Plugin';

use File::Spec;
use File::Basename ();
use File::ShareDir ();

has 'default_aui_version' => '5.4.3';

has 'static_path' => sub {
	my $self = shift;
	$self->path( 'aui-' . $self->aui_version );
};

has 'default_use_cdn' => 0;

has 'template' => 'aui_template';

sub path {
	my $self   = shift;
	my $folder = shift;

	my $local = File::Spec->catdir( File::Basename::dirname(__FILE__),
		'AUI', 'files', $folder );
	return $local if -d $local;

	my $share =
	  File::Spec->catdir( File::ShareDir::dist_dir('Mojolicious-Plugin-AUI'),
		$folder );
	return $share if -d $share;

	die "Cannot find files. Tried '$local' and '$share'.\n";
}

sub register {
	my ( $self, $app, $conf ) = @_;
	has 'aui_version' => ( defined $conf->{'aui_version'} )
	  ? $conf->{'aui_version'}
	  : $self->default_aui_version;
	has 'use_cdn' => ( defined $conf->{'use_cdn'} )
	  ? $conf->{'use_cdn'}
	  : $self->default_use_cdn;
	$conf->{auto} //= 1;    #/# highlight fix

	# Append "templates" and "aui" directories to the paths of resources
	# Append static to directories
	push @{ $app->static->paths },     $self->static_path;
	push @{ $app->renderer->classes }, __PACKAGE__;

	$app->helper( aui => sub { $self } );

	$app->helper(
		aui_include => sub {
			my $self = shift;
			$self->include
			  ( #TODO use render_to_string once Mojo 5.00 is required
				template => $self->aui->template,
			  );
		}
	);

	$app->hook(
		after_dispatch => sub {
			my $c = shift;

			my $dom = $c->res->dom;
			my $head = $dom->at('head') or return;

			my $append = $c->aui_include;
			$head->append_content($append);
			$c->tx->res->body( $dom->to_string );
		}
	) if $conf->{auto};

	$app->log->info( "Mojolicious::Plugin::AUI registered. AUI version "
		  . $self->aui_version );
	$app->log->info(
"  ** This library is a css/javascript lib from Atlassian (https://docs.atlassian.com/aui/latest/docs/applicationHeader.html)."
	);
	return $self;
}

1;

__DATA__

@@ aui_template.html.ep

<!-- Atlassian AUI Version <%= aui->aui_version %> -->
% if ( aui->use_cdn ) {
    %= stylesheet '//aui-cdn.atlassian.com/aui-adg/' . aui->aui_version . '/css/aui.css' 
    %= stylesheet '//aui-cdn.atlassian.com/aui-adg/' . aui->aui_version . '/css/aui-experimental.css' 
    %= javascript '//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js'
    %= javascript '//aui-cdn.atlassian.com/aui-adg/' . aui->aui_version . '/js/aui.js' 
    %= javascript '//aui-cdn.atlassian.com/aui-adg/' . aui->aui_version . '/js/aui-experimental.js' 
    %= javascript '//aui-cdn.atlassian.com/aui-adg/' . aui->aui_version . '/js/aui-soy.js' 	
% } else {
    %= stylesheet '/css/aui.css'
    %= stylesheet '/css/aui-experimental.css'
    %= javascript '/js/aui-dependencies.js'
    %= javascript '/js/aui.js'
    %= javascript '/js/aui-experimental.js'
    %= javascript '/js/aui-soy.js'
% }

__END__

=head1 NAME
 
Mojolicious::Plugin::AUI - Mojolicious integration for Atlassian AUI
 
=head1 SYNOPSIS
 
  # Mojolicious
  $app->plugin('AUI');
 
  # Mojolicious::Lite
  plugin 'AUI';
 
  # Use CDN  feature
  plugin 'AUI', use_cdn => 1;
  ...
  
  # Select non-default version  feature
  plugin 'AUI', aui_version => '5.5.1';
  ...
  __DATA__
  
  # Without 'auto' feature
  plugin 'AUI', auto => 0;
  ...
  __DATA__
  ...
  %= aui_include
 
=head1 DESCRIPTION
 
L<Mojolicious::Plugin::AUI> is a L<Mojolicious> plugin allowing easy use of the Atlassian AUI,
(L<https://developer.atlassian.com/display/AUI/Atlassian+User+Interface+%28AUI%29+Developer+Documentation>)
 
=head1 ATTRIBUTES
 
=head2 static_path
 
The path to the folder containing the bundled version of AUI to be used. This path is added to the static rendering path.
The default is C<< $plugin->path('AUI-' . $self->aui_version); >>.
 
=head2 template
 
The name of the template to be used. This allows the user to supply their own template name if desired.
 
=head2 default_aui_version
 
Currently set to version B<5.4.3>. 
 
In future, non-breaking releases will be silently upgraded, while breaking versions will be kept and left at the highest version that had been bundled.

=head2 default_use_cdn

Currenly set to false, so that bundled files are used.
 

=head1 METHODS
 
L<Mojolicious::Plugin::AUI> inherits all methods from
L<Mojolicious::Plugin> and implements the following new ones.
 
=head2 C<path>
 
  $plugin->path($directory);
 
Find the path to a directory relative to the shared data directory. This isn't likely to be needed.
 
=head2 C<register>
 
  $plugin->register($app);
 
Register plugin in L<Mojolicious> application. Optionally key-value pairs or a hashreference of the same may be passed. Those options are:
 
=over
 
=item use_cdn
 
Set to a true value, this loads the desired version from the atlassian CDN  and jQuery from Google. This bypasses the bundled ccs and js AUI files.

=item aui_version
 
Version of AUI (to be) loaded. Currently version 5.4.3 is set as the default. You can use this option to select from other
version bundled are 5.5.1 and 5.6.10. You can use the C<use_cdn> option to select any version Atlassian serves.
 
In future, non-breaking releases will be silently upgraded, while breaking versions will be kept and left at the highest version that had been bundled.

=item auto

Set to a true value, the template necessary for AUI will be automatically added to the C<< <head> >> tag of the rendered document if needed. Note that this will be skipped if no C<< <head> >> tag is found or if no messages are waiting to be added. Default is true.

=back
 
=head1 HELPERS
 
This plugin provides several helpers which are available as methods to the application and controllers and as functions to the templates (and lite apps).
  
=head2 C<aui_include>
 
Behaves like C<include> inserting the template needed to render the messages. You need to use this when setting C<< auto => 0 >>.
 
=head1 SEE ALSO
 
L<Mojolicious>, L<https://docs.atlassian.com/aui/latest/index.html/>
 
=head1 SOURCE REPOSITORY
 
L<http://github.com/.../Mojolicious-Plugin-AUI>
 
=head1 AUTHOR
 
Nicky Ayoub, E<lt>nicky.ayoub@gmail.comE<gt>
 
=head1 COPYRIGHT AND LICENSE
 
Mojolicious::Plugin::AUI is
 
Copyright (C) 2014 by Nicky Ayoub
 
This library is free software; you can redistribute it and/or modify
it under the same terms as Perl itself.

AUI uses Apache 2.0 License. See L<https://developer.atlassian.com/display/AUI/License> for terms.
 
=cut
