---
layout: post
title: "Unitary representations of the Poincaré group"
date:   2025-01-02
categories: miscellaneous
---
Confusion about definitions, Sources, Mackey theorem, Little group, ...

Recently, I was trying to learn about the standard model of particle physics. This theory is both _quantum mechanical_ and  _relativistic_. As a consequence,

* a given physical system is described by a Hilbert space $$H$$ of _states_ (which may be interpreted as _wave functions_ if $$H$$ is a function space),
* the physics works the same in every viable reference frame; that is, the theory should be _invariant under the symmetries of spacetime_ itself.

For now, we take _spacetime_ to mean Minkowski space $$\RR^{3,1}$$, which is shorthand for the real vector space $$\RR^4$$ equipped with the Minkowski inner product
\\[\langle u,v\rangle = u_0v_0-u_1v_1-u_2v_2-u_3v_3,\qquad u,v\in\RR^4.\\]
The group of symmetries (read: isometries) of $$\RR^{3,1}$$ is called the _Poincaré group_. It is built out of the _Lorentz group_ $$\rmO(3,1)$$, which is the subgroup of _linear isometries_:
\\[\rmO(3,1)=\\{A\in\GL(\RR^{3,1})\,|\,\forall u,v\in\RR^{3,1},\ \langle Au,Av\rangle=\langle u,v\rangle\\}.\\]
Together with the _translations_, this gives the full Poincaré group $$P(3,1)$$, consisting of affine transformations:
\\[P(3,1)=\\{x\mapsto Ax+b\,|\,A\in\rmO(3,1),\ b\in\RR^{3,1}\\}=\rmO(3,1)\ltimes\RR^{3,1}.\\]
This is completely analogous to the isometry group of Euclidean space $$\RR^n$$, which is $$\rmO(n)\ltimes\RR^n$$.

In order for the two principles above to be satisfied, the Poincaré group $$P(3,1)$$ must act on the Hibert space $$H$$ of states in a way that preserves the transition probabilities between states. I am going to directly quote E. Wigner here:

> The square of the modulus of the unitary scalar product $$(\psi, \phi)$$ of two normalized wave functions $$\psi$$ and $$\phi$$ is called the transition probability from the state $$\psi$$ into $$\psi$$, or conversely. This is supposed to give the probability that an experiment performed on a system in the state $$\phi$$, to see whether or not the state is $$\psi$$, gives the result that it is $$\psi$$. If there are two or more different experiments to decide this (e.g., essentially the same experiment, performed at different times) they are all supposed to give the same result, i.e., the transition probability has an invariant physical sense.[^wigner]

One can show that this implies that the action of $$P(3,1)$$ preserves the inner product of $$H$$ -- this is what we call a _unitary representation_ of the Poincaré group. In mathematically precise terms:

**Definition.** Let $$G$$ be a locally compact topological group.
1. A _continuous representation_ of $$G$$ on a Banach space $$E$$ is a continuous group homomorphism $$\pi: G\to B^\times(E)$$, where $$B^\times(E)$$ is the group of invertible bounded operators on $$E$$, equipped with the strong operator topology.[^continuous]
2. A _unitary representation_ of $$G$$ is a continuous representation $$\pi: G\to B^\times(H)$$ on a Hilbert space $$H$$ such that $$(\pi(g)u,\pi(g)v)=(u,v)$$ for all $$u,v\in H$$.[^inprod]

In 1939, Wigner set out to classify the unitary representations of the Poincaré group. He partially succeeded, and today his contribution is widely celebrated. There are a few subtleties that he had to contend with: first of all, there is no physical relevance in multiplying a quantum state by a (nonzero) scalar, so in fact it suffices to look at so-called _projective representations_ (i.e. representations up to a scalar factor). One would think that this might make the classification vastly more complicated, but in fact Wigner managed to show that it suffices to look instead at the unitary representations of the universal cover $$\widetilde P(3,1)$$ of the Poincaré group.

A greater issue is that in Wigner's time, some of the ingredients needed for a full classification were missing; for example, the Bargmann classification of unitary representations of $$\SL(2,\RR)$$. However, his classification still contained most of the physically relevant cases. In the literature, the cases outside of Wigner's classification (for example _tachyonic fields_) seem commonly to be swept under the rug. My goal here is to give an unabridged account of the actual classification of unitary representations of $$P(3,1)$$ (or $$\widetilde P(3,1)$$).

## Topological considerations

Connected components, universal cover, Lie algebra

## Representation-theoretic considerations

Compact groups, noncompact groups, spectral decomposition, factorial representations; Irreducible = fundamental particle

When one talks about "classifying representations", one usually means at least unterstanding the atomic building blocks, which are called _irreducible_ representations. Let us define this precisely:

**Definition.** Let $$\pi: G\to B^\times(E)$$ be some continuous representation. It is called _reducible_ if there exists a closed subspace $$0\subsetneq F\subsetneq E$$ which is _invariant_, i.e. $$\pi(g)v\in F$$ for all $$v\in F$$ and $$g\in G$$. Otherwise, $$\pi$$ is called _irreducible_.

### Compact groups

A few words of caution are appropriate before we seriously start working with representations. Foremost, we are always going to be working over the field of complex numbers. In a certain sense, representation theory is "nice" when talking about _compact_ groups (this includes _finite_ ones): every continuous representation of a compact group $$G$$ has an invariant inner product, which one can obtain by choosing an arbitrary inner product and "averaging" it over $$G$$. Possibly after completion, this already makes a unitary representation. Next, there is the _Peter--Weyl theorem_ which states that any unitary representation $$H$$ of $$G$$ is _completely reducible_, which means that it splits into an orthogonal direct sum
\\[H\cong\overline{\bigoplus_{i\in I}}H_i\\]
of irreducible unitary representations $$H_i$$. And finally, every irreducible representation of $$G$$ is _finite-dimensional_, and there are at most countably many different irreducible representations.

A simple visual example is the representation theory of the circle group $$S^1\subset\CC^\times$$: its irreducible representations $$\pi_k: S^1\to\GL(H_k)$$, $$k\in\ZZ$$, are all one-dimensional ($$H_k=\CC$$) and given by
\\[\pi_k(e^{\i t})=e^{\i kt},\qquad e^{\i t}\in S^1.\\]
Consider now the unitary representation of $$S^1$$ on the space of $$2\pi$$-periodic real functions $$L^2(\RR/(2\pi\ZZ))$$ by translation:
\\[\pi(e^{\i t})f(s)=f(s + t),\qquad s,t\in\RR,\ f\in L^2(\RR/(2\pi\ZZ)).\\]
As a representation, this is equivalent to the direct sum
\\[L^2(\RR/(2\pi\ZZ))\cong\overline{\bigoplus_{k\in\ZZ}}H_k.\\]
The correspondence is given by Fourier analysis! To be precise, we map every square-integrable sequence of coefficients $$(\ldots,c_{-1},c_0,c_1,c_2,\ldots)$$ to the Fourier series
\\[f(t)=\sum_{k=-\infty}^\infty c_ke^{\i k t}.\\]
Something like this (but more algebraically involved) can be done for other compact groups as well, and it has been the bread and butter for most the research I conducted during my doctoral studies. We will speak of it some other time. 

### Noncompact groups

For noncompact groups the situation is wildly different. First of all, very few of their finite-dimensional representations are unitary -- only the ones which factor through a compact group, and for many noncompact groups of interest it's only the trivial representation. All the interesting unitary representations are _infinite-dimensional_. Moreover, we cannot expect complete reducibility at all.

One example is possibly the most boring Lie group of all: the additive group $$(\RR,+)$$ of real numbers. A unitary representation of it is by translation on the Hilbert space $$L^2(\RR)$$:
\\[\pi(t)f(s)=f(s + t),\qquad s,t\in\RR,\ f\in L^2(\RR).\\]
Via the Fourier transform $$L^2(\RR)\to L^2(\RR), f\mapsto\widehat f$$, this representation transforms to
\\[\widehat{\pi(t)f}(x)=e^{\i tx}\widehat{f}(x),\qquad x\in\RR.\\]
This is the closest we can get to "decomposing" this representation. The "eigenfunctions" $$x\mapsto e^{\i t x}$$, $$t\in\RR$$, also span one-dimensional (irreducible) representations, but they do not actually live inside $$L^2(\RR)$$. Physicists pretend that they do and call them _momentum states_.

We may recall from analysis that every element in a dense subspace of $$L^2(\RR)$$ can be written as a Fourier integral, and in a similar vein one is tempted to write $$L^2(\RR)$$ not as a direct sum, but as a "direct integral" of these one-dimensional representations.[^directintegral]

When all these analytic complications already start showing up for only the group $$\RR$$, the matter seems to be hopelessly complicated for the Poincaré group. Yet miraculously, the unitary representations of $$P(3,1)$$ turn out to be completely reducible.[^poincarereducible] So we really need to only worry about the irreducible ones, and not about how to combine them together.

## Mackey's Theorem

Little group, stabilizers and orbits

## Unitary representations of the little groups

Tardyonic: $$\SU(2)$$, Massless with momentum: $$\SO(2)\ltimes\RR^2$$, Tachyonic: $$\SL(2,\RR)$$, Momentumless: $$\SL(2,\CC)$$

## Conclusion

Arbitrary dimension: https://arxiv.org/abs/hep-th/0611263

# Footnotes

[^wigner]: E. Wigner: [On Unitary Representations of the Inhomogeneous Lorentz Group](https://www.jstor.org/stable/1968551), Ann. Math. **40** (1), 149--204 (1939).
[^continuous]: There is a bunch of other characterizations of what it means for a representation to be continuous, but this requires delving into functional analysis, which I don't want to do here.
[^inprod]: We customarily denote the inner product on a given Hilbert space by $$(\,\cdot\,,\cdot\,)$$.
[^directintegral]: There is, of course, a well-developed theory behind the [direct integral](https://en.wikipedia.org/wiki/Direct_integral).
[^poincarereducible]: At least that is what Wigner claimed in his celebrated article (p. 154 f.):
    > It will be one of the results of the detailed investigation that the inhomogeneous Lorentz group has no "continuous" representations, all representations can be decomposed into irreducible ones. Thus the work of Majorana and Dirac appears to be justified from this point of view a posteriori.[^wigner]
    
    I have, however, not been able to locate the proof of this statement (please point me to it if you see it) -- and all the literature I've consulted swipes it under the rug. Notice a pattern?
