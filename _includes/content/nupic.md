
# Numenta Platform for Intelligent Computing (NuPIC)

NuPIC is a Python / C++ open source project that implements [HTM]({{ site.baseurl }}/htm.html) as described in the [HTM White Paper]({{ site.baseurl }}/htm-white-paper.html). For an introduction to the project, watch the presentation below, given at the Open Source Conference (OSCON) in 2013.

<div align="center">
    <iframe width="640" height="415" src="//www.youtube.com/embed/5r1vZ1ymrQE" frameborder="0" allowfullscreen="allowfullscreen">
    </iframe>
</div>
<br/>

## Requirements

We're working on providing virtual machines ready to run NuPIC so Windows developers can work on NuPIC within [Virtual Box](https://www.virtualbox.org). Currently, the build requirements are:

* Linux
* cmake
* clang or gcc compiler
* Python 2.6 or 2.7

## Source Code

We keep our source code on Github in the following projects:

- [numenta/nupic](http://github.com/numenta/nupic) (python client)

<iframe src="http://ghbtns.com/github-btn.html?user=numenta&amp;repo=nupic&amp;type=watch&amp;count=true&amp;size=large"
  allowtransparency="true" frameborder="0" scrolling="0" width="170" height="30">
</iframe>
<iframe src="http://ghbtns.com/github-btn.html?user=numenta&amp;repo=nupic&amp;type=fork&amp;count=true&amp;size=large"
  allowtransparency="true" frameborder="0" scrolling="0" width="170" height="30">
</iframe>

- [numenta/nupic.core](http://github.com/numenta/nupic.core) (c++ core)

<iframe src="http://ghbtns.com/github-btn.html?user=numenta&amp;repo=nupic.core&amp;type=watch&amp;count=true&amp;size=large"
  allowtransparency="true" frameborder="0" scrolling="0" width="170" height="30">
</iframe>
<iframe src="http://ghbtns.com/github-btn.html?user=numenta&amp;repo=nupic.core&amp;type=fork&amp;count=true&amp;size=large"
  allowtransparency="true" frameborder="0" scrolling="0" width="170" height="30">
</iframe>

<br/>
<br/>

## Build Status

We run continuous integration with Travis-CI for both [nupic](https://travis-ci.org/numenta/nupic) and [nupic.core](https://travis-ci.org/numenta/nupic.core). You can see detailed status of our build pipelines at [status.numenta.org](http://status.numenta.org).

- Current nupic status: [![Build Status](https://travis-ci.org/numenta/nupic.png?branch=master)](https://travis-ci.org/numenta/nupic)
- Current nupic.core status: [![Build Status](https://travis-ci.org/numenta/nupic.core.png?branch=master)](https://travis-ci.org/numenta/nupic.core)

## Issue Tracking

You can see all our GitHub Issues for all NuPIC-related repositories at <http://status.numenta.org/issues>.
