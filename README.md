SCREPL
======

A pluggable command line scraper with REPL support.

[![npm install -g screpl](https://nodei.co/npm/screpl.png)](https://nodei.co/npm/screpl/)

# Usage

Pass a URL to SCREPL then use the `$` variable as a jQuery object.

    Usage: screpl <url>

    Options:

      -h, --help              output usage information
      -V, --version           output the version number
      -r, --require <module>  require a plugin module

![Demo](https://dl.dropboxusercontent.com/u/48325037/screpl-demo.gif)

# Plugins

Check out the plugin example in the examples directory. Require plugins using
the `--require` option.

    $ screpl http://example.com --require examples/plugin.js

      request loaded with 200
      use the variable `$` to access the result

    > getText()
    > links.text()

**Variables and functions exposed through plugins will autocomplete.**

# License

Copyright (c) 2014, Matt Hernandez <matt@modulus.io>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
