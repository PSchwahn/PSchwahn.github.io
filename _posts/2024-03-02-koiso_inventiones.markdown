---
layout: post
title:  "Einstein Metrics, Complex Structures, and a nonexistent isomorphism"
date:   2024-03-02 21:00:00 +0100
categories: miscellaneous
---

<!--
If global macros don't work:
<div style="display:none">
\(
  \newcommand{\Ric}{\mathrm{Ric}}
  \newcommand{\CC}{\mathbb{C}}
\)
</div>
-->

Here's a perhaps lesser known fact about special 2-forms on Kähler manifolds:
* If the Ricci curvature is negative, there are no[^noX] _parallel_ antihermitian 2-forms.
* If the Ricci curvature is positive, there are neither _parallel_ nor _harmonic_ antihermitian 2-forms.
* If the manifold is Ricci-flat, then parallel and harmonic antihermitian 2-forms happily coexist because they are the same.

This post will explain how this is proved using a bit of "flipping triangles" magic, and how this helps correct a mistake in a famous article[^koiso] by N. Koiso from 1983, published in _Inventiones Mathematicae_.

I was inspired to write this post after my doctoral advisor Uwe Semmelmann told me of a conversation he had with Hajo Hein about this very article, who pointed out that there was at least one serious error in it. We stumbled across a solution when Uwe recently visited me in Paris.

## Koiso's article

In the aforementioned article[^koiso], Koiso studies among other things the _infinitesimal_ deformations of Einstein metrics and of complex structures on a closed smooth manifold $$M$$. Let me first explain what that means.

### Einstein deformations

Let $$g$$ be an Einstein metric on $$M$$ -- that is, a Riemannian metric such that its Ricci tensor is proportional to $$g$$ itself:
\\[\Ric_g=Eg,\\qquad E\in\RR.\\]
When looking for interesting Riemannian metrics on a given manifold, Einstein metrics are kind of the sweet spot, because the Einstein condition sits comfortably inbetween the very rigid condition of _constant of sectional curvature_ on the stronger side and the quite lax condition of _constant scalar curvature_ on the weaker side.[^einsteincondition] So naturally people want to study the following question:

**Question 1**: What are the Einstein metrics on a given manifold $$M$$? In particular, how many are there?

The Einstein equation is a nonlinear partial differential equation[^pde], and solving it is notoriously difficult. So the first question is a tad too hard in general. Okay, maybe it gets a little bit easier if we look at the solution space _locally_:

**Question 2**: Given an Einstein metric $$g$$ on $$M$$, are there any other Einstein metrics nearby or is $$g$$ isolated in the solution set?[^nearby]

Koiso managed to show that the solution set it not _too_ pathological in the sense that if an Einstein metric is not isolated, there is actually a curve of Einstein metrics through it, i.e. a continous non-constant family of Einstein metrics $$(g_t)$$ where $$t\in\RR$$ and $$g_0=g$$. We shall call such a family an _Einstein deformation_.

As it stands, Question 2 is not too interesting because the answer is always "yes". Why? Because if we take an Einstein metric $$g$$ and scale it by some factor $$c>0$$, the result $$cg$$ will again be Einstein. What's more, if we take a curve of diffeomorphisms $$\varphi_t: M\to M$$ through the identity ($$\varphi_0=\id$$), then the pulled-back metrics $$g_t:=\varphi_t^\ast g$$ will be isometric to $$g$$ and thus also Einstein. We would thus like to exclude these "trivial deformations" from our considerations:[^moduli]

**Question 3**: Given an Einstein metric $$g$$, does there exist a non-trivial Einstein deformation $$(g_t)$$ in the sense that $$g_t$$ is not related to $$g$$ by scaling or diffeomorphism for all $$t$$?

How do we test whether this can be the case? One possibility is to linearize the problem. Recall that a Riemannian metric is nothing but a symmetric 2-tensor field that is positive-definite at each point. The set of symmetric 2-tensor fields $$\Gamma(\Sym^2T^\ast M)$$ is a vector space. Thus, given a smooth curve of metrics $$(g_t)$$, we may differentiate[^frechet] it to obtain the first order jet
\\[h:=\frac{\dd}{\dd t}\Big|_{t=0}g_t\in\Gamma(\Sym^2T^\ast M).\\]

If $$(g_t)$$ is an Einstein deformation[^smooth], then the tensor field $$h$$ satisfies the _linearized Einstein equation_. Assuming that $$(g_t)$$ is a nontrivial deformation, we may even arrange for $$h$$ to preserve the volume form of $$g$$ to first order (i.e. fixing the scaling issue) and to be transverse/orthogonal to the orbits of the diffeomorphism group (i.e. fixing the isometry issue).[^tt] Such an $$h$$ is called an _(essential) infinitesimal Einstein deformation_ (IED), and it satisfies
\\[\LL h=2E h,\qquad\tr_gh=0,\qquad\delta_gh=0.\\]
Here $$\tr_g$$ denotes the trace and $$\delta_g$$ the divergence operator, while $$\LL$$ is the _Lichnerowicz Laplacian_[^lichn].

The linear system of equations above may now be studied in order to get to grips with Question 3. Clearly, if it has no solutions, then there cannot be a nontrivial Einstein deformation. In the other direction, this goes wrong: there may exist IED that cannot be "integrated" into an actual curve. In fact, there exist obstructions against integrability -- and these are still kind of mysterious. A concise summary of the topic is contained in Chapter XII of Besse's famous monograph on Einstein manifolds.[^besse]

### Complex deformations

Let us now turn to the deformation theory of complex structures, which had originally been developed by Kodaira and Spencer[^KS] in a more algebro-geometric context, but recast by Koiso into differential-geometric terms. First, recall that an even-dimensional manifold is _complex_ if it has an atlas of charts to $$\CC^n$$ (instead of $$\RR^{2n}$$) such that all transition maps are _holomorphic_. This induces a so-called _complex structure_ $$J\in\Gamma(\End TM)$$ on $$M$$, an endomorphism of the tangent bundle that is defined by multiplication with $$\i$$ in a chart and thus squares to minus the identity,
\\[J^2=-\id_{TM}.\\]
By the famous Newlander--Nirenberg theorem, any $$J\in\Gamma(\End TM)$$ with $$J^2=-\id_{TM}$$ is a complex structure if and only if its so-called _Nijenhuis tensor_ $$N_J$$ vanishes.[^nijenhuis]

We may now ask the same questions as above: Given a complex structure on $$M$$, are there any other non-isomorphic complex structures nearby? The deformation theory is a little bit different than for Einstein metrics, because there may be complex structures "near" $$J$$ that are not connected to it by a curve of complex structures. Nevertheless, we may investigate smooth curves $$(J_t)$$ of complex structures and their first order jets
\\[I:=\frac{\dd}{\dd t}\Big|_{t=0}J_t\in\Gamma(\End TM).\\]

In order to define what it means to be orthogonal to orbits of the diffeomorphism group, we however need a metric. So let $$g$$ be a Riemannian metric on $$M$$ that is _compatible_ with $$J$$ -- this just means that the endomorphism $$J$$ is orthogonal with respect to $$g$$, i.e.
\\[g(JX,JY)=g(X,Y)\\]
for all vector fields $$X,Y$$. Differentiating the conditions $$J_t^2=-\id_{TM}$$ and $$N_{J_t}=0$$ together with the tranversality condition yields a first order jet $$I\in\Gamma(\End TM)$$ satisfying
\\[ IJ+JI=0,\qquad \bar\partial^\nabla I=0,\qquad(\bar\partial^\nabla)^\ast I=0.\\]
We call such an $$I$$ an _(essential) infinitesimal complex deformation_ (ICD). The operator $$\bar\partial^\nabla$$ is the coboundary operator for the _Dolbeault complex_[^dolbeault]
\\[ 0\to\Gamma(T^{1,0}M)\stackrel{\bar\partial^\nabla}{\to}\Omega^{0,1}(M,T^{1,0}M)\stackrel{\bar\partial^\nabla}{\to}\Omega^{0,2}(M,T^{1,0}M)\stackrel{\bar\partial^\nabla}{\to}\ldots, \\]
in which $$I$$ is identified with an element of $$\Omega^{0,1}(M,T^{1,0}M)$$. Thus $$I$$ corresponds to an element of the cohomology $$H^{0,1}(M,T^{1,0}M)$$ of this complex, which is canonically isomorphic to the sheaf cohomology $$H^1(M,\Theta)$$ of the sheaf $$\Theta$$ of holomorphic vector fields on $$M$$. This establishes the connection to the Kodaira--Spencer deformation theory!

In constract to the deformation theory of Einstein metrics, the integrability obstructions are much better understood: they manifest as elements of the second cohomology group $$H^2(M,\Theta)$$ -- in particular, if $$H^2(M,\Theta)=0$$, then _every_ ICD is integrable into a curve of complex structures.

### Kähler relations

Assume that $$(M,g,J)$$ is a _Kähler manifold_, that is a complex manifold with compatible metric $$g$$ such that the complex structure $$J$$ is _parallel_ with respect to the Levi-Civita connection, i.e.
\\[\nabla J=0.\\]
Given an infinitesimal complex deformation $$I$$, we may identify it via the metric with a 2-tensor field $$I\in\Gamma(T^\ast M\otimes T^\ast M)$$ that is _anti-hermitian_ (which just means that the endomorphism $$I$$ anticommutes with $$J$$). Curiously, on a Kähler--Einstein manifold[^KE], the 2-tensor field $$I$$ also satisfies
\\[\LL I=2EI.\\]
Decomposing $$I$$ into a symmetric and an anti-symmetric part, we obtain a symmetric 2-tensor field $$I_S$$ and a 2-form $$I_A$$, and since all the involved operators preserve this decomposition, the tensor field $$I_S$$ is an infinitesimal Einstein deformation![^trace] In fact, the space of _symmetric_ ICD of a Kähler manifold is isomorphic to the space of _anti-hermitian_ IED.

Okay, now what about the 2-form part $$I_A$$? 

## The problem

In Proposition 8.2 of his article[^koiso], Koiso claims that on a Kähler manifold, an anti-symmetric anti-hermitian 2-tensor field $$I\in\Gamma(T^\ast M\otimes T^\ast M)$$ is an ICD if and only if it is _parallel_.

This is a mouthful, so let's break it down: Anti-symmetric just means that $$I$$ is a 2-form, i.e. $$I\in\Omega^2(M)$$. Generally, on a complex manifold $$(M,J)$$, the complexified tangent bundle $$TM^\CC$$ splits into eigenbundles of $$J$$ to the eigenvalues $$\pm\i$$, denotes by $$T^{1,0}M$$ and $$T^{0,1}M$$, respectively.[^complexified] Going to the exterior power, we may split
\\[\Lambda^2T^\ast M^\CC=\Lambda^{2,0}\oplus\Lambda^{1,1}\oplus\Lambda^{2,0}\\]
according to the action of $$J$$. The (complexified) bundles of hermitian/anti-hermitian 2-forms are then just $$\Lambda^{1,1}$$ and $$\Lambda^{(2,0)\oplus(0,2)}:=\Lambda^{2,0}\oplus\Lambda^{0,2}$$, respectively.

So the statement above may be reformulated as: any real section $$I\in\Omega^{(2,0)\oplus(0,2)}(M)$$ is an ICD if and only if $$\nabla I=0$$. Moreover, Koiso claims that this is the case precisely if $$I$$ is _harmonic_, i.e. $$\Delta I=0$$. And since we're on a Kähler manifold, where the Hodge--deRham Laplacian $$\Delta=d^\ast d+dd^\ast$$ coincides with twice the $$\bar\partial$$-Laplacian $$\Delta_{\bar\partial}=\bar\partial^\ast\bar\partial+\bar\partial\bar\partial^\ast$$, this means that (the (2,0)-part of) $$I$$ is _holomorphic_ and the space of anti-symmetric ICD is isomorphic to the Dolbeault cohomology group $$H^{2,0}(M,\CC)$$.

It took some time for people to realize that this cannot be true. As pointed out by Dai--Wang--Wei[^dww] in 2007, there exist examples (complex hyperbolic surfaces) with holomorphic $$2$$-forms (i.e. $$H^{2,0}(M,\CC)\neq0$$) but without ICD!

## The solution

In order to see what went wrong, let us revisit the proof of Proposition 8.2.

### Why anti-symmetric ICD are parallel

Let $$I\Omega^{(2,0)\oplus(0,2)}(M)$$ be an ICD, that is $$\bar\partial^\nabla I=0$$ and $$(\bar\partial^\nabla)^\ast I=0$$.
 A Weitzenböck formula[^weitz] by Koiso then implies that
\\[\nabla^\ast\nabla I+2\firstkind I=0,\\]
where $$\firstkind: \Lambda^2\to\Lambda^2$$ is the _curvature operator of the first kind_ defined from the Riemannian curvature $$R$$ by
\\[g(\firstkind(X\wedge Y),Z\wedge W):=g(R(X,Y)Z,W).\\]
By yet another Weitzenböck formula we can write the Hodge--deRham Laplacian on 2-forms as
\\[\Delta=\nabla^\ast\nabla+2\firstkind+2E.\\]
Moreover, we have $$\firstkind I=0$$ for anti-hermitian two-forms $$I$$. Why? Because $$\nabla J=0$$, so $$R(X,Y)J=0$$ for all vector fields $$X,Y$$ -- but this can be rearranged to $$\firstkind(X\wedge Y)$$ being hermitian! And since $$\firstkind$$ is self-adjoint with respect to $$g$$, it follows that $$\firstkind$$ annihilates all anti-hermitian 2-forms.

Or for a more high-level explanation: the image of the curvature operator is contained in the holonomy algebra, which in turn is contained in $$\mathfrak{u}(n)\cong\Lambda^{1,1}$$ for Kähler manifolds. Thus $$\firstkind\big\vert_{\Lambda^{(2,0)\oplus(0,2)}}=0$$.

As a consequence, the ICD condition for our antihermitian 2-form $$I$$ reduces to $$\nabla^\ast\nabla I=0$$ and thus $$\nabla I=0$$ since we're on a compact manifold. 

### Parallel and harmonic forms

Koiso goes on to claim that being parallel and being harmonic are equivalent. But this is simply not true. Okay, for $$E=0$$ it kind of is -- indeed, by the above Weitzenböck formula, $$\Delta I=\nabla^\ast\nabla I$$ for $$I\in\Lambda^{(2,0)\oplus(0,2)}$$.

For $$E\neq0$$, we still have
\\[\Delta I=\nabla^\ast\nabla I+2EI,\\]
so parallel and harmonic anti-hermitian 2-forms lie in _different_ eigenspaces of $$\nabla^\ast\nabla$$. This is a bit awkward because parallel forms are necessarily closed and coclosed, so in particular harmonic. Hence for $$E\neq0$$ there cannot be _any_ parallel antihermitian 2-forms.

What's more, note that $$\nabla^\ast\nabla$$ is a _positive-semidefinite_ operator. If $$E>0$$, then any harmonic anti-hermitian 2-form $$I$$ would be an eigenform to $$\nabla^\ast\nabla$$ to the eigenvalue $$-2E<0$$, a contradiction! So there cannot even be harmonic anti-hermitian 2-forms for $$E>0$$.

So that settles it: If $$E=0$$, then anti-symmetric ICD are indeed harmonic, i.e. indeed the space of anti-symmetric ICD is isomorphic to $$H^{2,0}(M,\CC)$$. And if $$E\neq0$$, then there are no anti-symmetric ICD at all, irrespective of what $$H^{2,0}(M,\CC)$$ does.

### Aftermath

What's weird is that Koiso's Corollary 9.4 about the dimension of the space of IED on a Kähler--Einstein manifold seems to be correct, even if it relies on the faulty claim about holomorphic 2-forms. This is because he also noticed that there are no parallel anti-hermitian two-forms if $$E\neq0$$, and because for $$E=0$$ the claim is actually true. So fortunately, nothing else in his paper breaks down. Mathematics is saved once again!

<p align="center">
<img src="/assets/jobdone.png" alt="My job here is done. - But you didn't do anthing!">
</p>


# Footnotes

[^noX]: With "there are no $$X$$" (in the context of some vector space) I of course always mean "there are no $$X$$ except when $$X=0$$".
[^koiso]: N. Koiso: [Einstein Metrics and Complex Structures](https://doi.org/10.1007/BF01393826), Invent. Math. **73**, 71-106, 1983.
[^einsteincondition]: Also the Einstein equation is kind of important in general relativity, but this is a _Riemannian_ household, so no further talk of that!
[^pde]: No, I am not going to write it out in a local chart so you can see the derivatives.
[^nearby]: The keywords "nearby" and "isolated" indicate that there is some topology going on. To be precise, we consider the set of Einstein metrics as a subset of the space $$\mathcal{M}$$ of _all_ Riemannian metrics on $$M.$$ If you really want to know, $$\mathcal{M}$$ is an infinite-dimensional manifold modeled on an inverse limit of Hilbert spaces and thus carries a natural topology -- and even a Riemannian metric itself! Don't worry, this won't be on the test.
[^moduli]: This exclusion of trivial deformations may also be achieved by taking the set of Einstein metrics in $$\mathcal{M}$$ and quotienting out the action of the group $$\RR_+\times\mathrm{Diff}(M)$$ (i.e. scaling + diffeomorphisms). The result is called the _moduli space_ of Einstein structures, and Question 3 may now be succinctly stated as: "Is the equivalence class $$[g]$$ isolated in the moduli space?"
[^frechet]: The space $$\Gamma(VM)$$ of smooth sections of a vector bundle $$VM$$ is an infinite-dimensional vector space -- but luckily, it is a Fréchet space, so the derivative is well-defined.
[^smooth]: Koiso also showed that without restriction, Einstein deformations may be assumed to be smooth, and even analytic. Phew!
[^tt]: This is what is known in physics as the _**tt** gauge_. The two **t** stand for **t**raceless and **t**ransverse.
[^lichn]: The Lichnerowicz Laplacian is a certain operator on tensor fields of any kind that generalizes the well-known Hodge--deRham Laplacian on differential forms. It is really cool and I am going to write something about it someday.
[^besse]: Arthur L. Besse: [Einstein manifolds](https://doi.org/10.1007/978-3-540-74311-8), Springer-Verlag Berlin, 1987.
[^KS]: K. Kodaira, D.C. Spencer: [On the variation of almost-complex structure](https://doi.org/10.1515/9781400879915-011), Algebraic Geometry and Topology, Princeton, 139-150, 1957.
[^nijenhuis]: If you really want to know, the Nijenhuis tensor of $$J$$ is a tensor field of type $$(1,2)$$ defined as
	\\[N_J(X,Y):=[X,Y]-[JX,JY]+J[JX,Y]+J[X,JY]\\]
	for vector fields $$X,Y$$. Are you happy now?
	
[^dolbeault]: I shall not dwell on the origin and meaning of these differential operators, Dolbeault complexes and sheaf cohomology here -- instead, I will return to this topic on some later day. 
[^KE]: That is, a Kähler manifold $$(M,g,J)$$ where the metric $$g$$ is Einstein.
[^trace]: The tracelessness is an automatic consequence of being anti-hermitian.
[^complexified]: If you're uneasy with bundle manipulation, consider the following vector space analogue: A linear endomorphism $$J$$ with $$J^2=-\id$$ of a real vector space $$V$$ is never diagonalizable -- but if $$V$$ is complexified, then the complex-linearly extended $$J$$ has eigenvalues $$\pm\i$$, and the eigenspaces are conjugate.
[^dww]: X. Dai, X. Wang, G. Wei: [On the variational stability of Kähler-Einstein metrics](http://dx.doi.org/10.4310/CAG.2007.v15.n4.a1), Comm. Anal. Geom. **15** (4), 669-693, 2007.
[^weitz]: A _Weitzenböck formula_ is a nontrivial relation on sections of some vector bundle of the form
	\\[D_1^\ast D_1+\ldots D_k^\ast D_k=C,\\]
	where the $$D_i$$ are certain first order differential operators called _partial gradients_ and $$C$$ is a fibrewise term (i.e. a bundle morphism), usually some sort of curvature operator. See for example:
	
	U. Semmelmann, G. Weingart: [The Weitzenböck machine](https://doi.org/10.1112/S0010437X09004333), Compositio Math. **146**, 507-540, 2007.
