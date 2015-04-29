
# Hierarchal Temporal Memory (HTM)

> For a detailed explanation of [Hierarchical Temporal Memory](http://en.wikipedia.org/wiki/Hierarchical_temporal_memory), read the [HTM White Paper](htm-white-paper.html).

There are many things humans find easy to do that computers are currently unable
to do. Tasks such as visual pattern recognition, understanding spoken language,
recognizing and manipulating objects by touch, and navigating in a complex world
are easy for humans. Yet despite decades of research, we have few viable
algorithms for achieving human-like performance on a computer.

In humans, these capabilities are largely performed by the neocortex. Hierarchal
Temporal Memory (HTM) is a technology modeled on how the neocortex performs
these functions. It offers the groundwork for building machines that approach or
exceed human level performance for many cognitive tasks. HTM is implemented
within the [NuPIC]({{ site.data.url.index }}) open source project. NuPIC can run
anywhere, including on embedded systems and distributed sensors.

## Online Learning

Most machine learning techniques are relatively static.  A model is constructed
from a training data set, verified on a testing data set, and then applied to
real-world data. However the patterns and structure in the world changes over
time. Therefore previously accurate models must be regularly retrained with new
data, repeating the time and expense of the original process.

HTM on the other hand is an online learning system.  It does not require
conventional training and testing data sets. Instead, HTM learns continuously
with each new data point.  HTM is constantly making predictions which are
continually verified as more data arrives.  As the underlying patterns in the
data change HTM adjusts accordingly.  An online learning system such as HTM
forces you to think about many things differently than you do with algorithms
that rely on static training data sets.

<span id="sdr" class="anchor"></span>

## Sparse Distributed Representations

Computers store information in “dense” representations such as a 32 bit word
where all combinations of 1s and 0s are possible.

By contrast, brains use sparse distributed representations. The human neocortex
has roughly 100 billion neurons, but at any given time only a small percent are
active. The activity of neurons are like bits in a computer, and therefore the
representation is sparse.  HTM also uses SDRs.  A typical implementation of HTM
might have 2048 columns and 64K artificial neurons where as few as 40 might be
active at once.  There are many mathematical advantages of using SDRs.  HTM and
the brain could not work otherwise.

<div class="image-wrapper">
  <img alt="Example of a sparse distributed representation in an array of cells" src="{{ site.baseurl }}/images/sdr.png" />
  <p>This diagram represents sparsity: two thousand circles with a small number of red circles active.</p>
</div>

This diagram represents a sparse distributed representation: two thousand
circles with a small number of red circles active.

In SDRs, unlike in a dense representations, each bit has meaning. This means
that if two vectors have 1s in the same position they are semantically similar
in that attribute. SDRs are how brains solve the problem of knowledge
representation that has plagued AI for decades.

For more details about SDRs, watch <a href="https://www.youtube.com/watch?v=sGlnLRTXGHI" rel="prettyPhoto" title="">this excerpt</a> from a talk given by Jeff Hawkins.
