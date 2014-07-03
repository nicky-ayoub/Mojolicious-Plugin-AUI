# vim: filetype=perl :
use strict;
use warnings;

use Test::More tests => 1; # last test to print

BEGIN {
   use_ok('Mojolicious::Plugin::AUI');
}

diag("Testing Mojolicious::Plugin::AUI $Mojolicious::Plugin::AUI::VERSION");
