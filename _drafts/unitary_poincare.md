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
1. A _continous representation_ of $$G$$ on a Banach space $$E$$ is a continous group homomorphism $$\pi: G\to B^\times(E)$$, where $$B^\times(E)$$ is the group of invertible bounded operators on $$E$$, equipped with the strong operator topology.[^continous]
2. A _unitary representation_ of $$G$$ is a continous representation $$\pi: G\to B^\times(H)$$ on a Hilbert space $$H$$ such that $$(\pi(g)u,\pi(g)v)=(u,v)$$ for all $$u,v\in H$$.[^inprod]

In 1939, Wigner set out to classify the unitary representations of the Poincaré group. He partially succeeded, and today his contribution is widely celebrated. There are a few subtleties that he had to contend with: first of all, there is no physical relevance in multiplying a quantum state by a (nonzero) scalar, so in fact it suffices to look at so-called _projective representations_ (i.e. representations up to a scalar factor). One would think that this might make the classification vastly more complicated, but in fact Wigner managed to show that it suffices to look instead at the unitary representations of the universal cover $$\widetilde P(3,1)$$ of the Poincaré group.

A greater issue is that in Wigner's time, some of the ingredients needed for a full classification were missing; for example, the Bargmann classification of unitary representations of $$\SL(2,\RR)$$. However, his classification still contained most of the physically relevant cases. In the literature, the cases outside of Wigner's classification (for example _tachyonic fields_) seem commonly to be swept under the rug. My goal here is to give an unabridged account of the actual classification of unitary representations of $$P(3,1)$$ (or $$\widetilde P(3,1)$$).

## Topological considerations

Connected components, universal cover, Lie algebra

## Mackey's Theorem

Little group, stabilizers and orbits

## Unitary representations of the little groups

Tardyonic: $$\SU(2)$$, Massless with momentum: $$\SO(2)\ltimes\RR^2$$, Tachyonic: $$\SL(2,\RR)$$, Momentumless: $$\SL(2,\CC)$$

## Conclusion

# Footnotes

[^wigner]: E. Wigner: [On Unitary Representations of the Inhomogeneous Lorentz Group](https://www.jstor.org/stable/1968551), Ann. Math. **40** (1), 149--204 (1939).
[^continous]: There is a bunch of other characterizations of what it means for a representation to be continous, but this requires delving into functional analysis, which I don't want to do here.
[^inprod]: We customarily denote the inner product on a given Hilbert space by $$(\,\cdot\,,\cdot\,)$$.
