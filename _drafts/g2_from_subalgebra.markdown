---
layout: post
title:  "Some constructions of \\(G_2\\)"
---
How to build the (complex) Lie algebra $$\fg_2$$ from its subalgebra $$\sl_3$$ (or $$\sl_2\times\sl_2$$). Construction without Lie theory, see subalgebras in root system. Relation to octonions.

In the late 19th century, Cartan and Killing classified the [complex simple Lie algebras](https://en.wikipedia.org/wiki/Simple_Lie_algebra) (and with them the complex resp. compact simple Lie groups).[^cartankilling] They obtained four infinite series $$A_n,B_n,C_n,D_n$$, as well as the four exceptional Lie groups $$E_6,E_7,E_8,F_4,G_2$$ (here the subscript indicates the so-called _rank_). The classification relies on reducing the structure of a simple Lie algebra to that of its _root system_, and then classifying these. Root system are systems of vectors in a finite-dimensional Euclidean space, satisfying certain very restrictive properties. We will get back to these later -- for now, it suffices to note that any simple Lie algebra may be reconstructed from its root system. In particular, this makes it possible to construct the exceptional Lie algebras $$\fe_6,\fe_7,\fe_8,\ff_4,\fg_2$$. The smallest of them, $$\fg_2$$, has dimension 14. However, these Lie algebras remain somewhat mysterious, and one cannot help but wonder about their geometric meaning.

Enter the octonions![^octonions] As it turns out, the (compact, real) Lie group $$G_2$$ may be succinctly described as their automorphism group, that is
\\[G_2=\Aut\OO=\\{f\in\GL(\OO)\,\|\,f(xy)=f(x)f(y)\quad \forall x,y\in\OO\\}.\\]
Its Lie algebra $$\fg_2$$ hence consists of "infinitesimal automorphisms", i.e. _derivations_ of $$\OO$$:
\\[\fg_2=\mathfrak{der}(\OO)=\\{A\in\gl(\OO)\,\|\,A(xy)=A(x)y+xA(y)\quad \forall x,y\in\OO\\}.\\]
When dealing with the geometry of $$G_2$$ or its subgroups, the octonionic picture is often helpful. For example, the subgroup $$\SU(3)\subset G_2$$ may be defined as the stabilizer of some imaginary octonion (and consequentially, the subalgebra $$\su(3)\subset\fg_2$$ as its annihilator).

Today, I will depart from the octonionic setting and showcase an elementary construction of the Lie algebra $$\fg_2$$ that does not use any Lie-theoretic machinery like roots or Dynkin diagrams -- although we will see later on that the whole construction can be elegantly predicted by looking at the root system of $$\fg_2$$.

## Deconstructing $$\fg_2$$

In order to build up $$\fg_2$$, first we have to break it down. We take it as a given that $$\su(3)$$ is a subalgebra of $$\fg_2$$ -- this can be either shown elegantly in the octonionic picture[^su3stab] or read off from the root system.

Yes, yes, algebraists, I hear your sighs - why not work over an algebraically closed field? Fair enough. Reject real vector spaces, we complexify. So from now on, let $$\fg_2$$ denote the _complex_ simple Lie algebra. The complexification of $$\su(3)$$ is $$\sl(3,\CC)$$. So we may write
\begin{equation}
\fg_2\cong\sl(3,\CC)\oplus W,\label{g2decomp1}
\end{equation}
where $$W$$ is some 6-dimensional complex vector space.

Every Lie algebra $$\fg$$ acts on itself via its Lie bracket: this is called the _adjoint representation_,
\\[\ad: \fg\to\gl(\fg),\qquad (\ad x)y:=[x,y],\\]
and the Jacobi identity
\begin{equation}
[x,[y,z]]+[y,[z,x]]+[z,[x,y]]=0\label{jacobi}
\end{equation}
for all $$x,y,z\in\fg$$ ensures that $$\ad$$ is in fact a representation.[^jacobi]

Restricting this representation to the subalgebra $$\sl(3,\CC)\subset\fg_2$$, we may assume that splitting \eqref{g2decomp1} is $$\sl(3,\CC)$$-invariant (because this Lie algebra is reductive). In particular, $$W$$ is a 6-dimensional representation of $$\sl(3,\CC)$$.

What are the low-dimensional (complex) irreducible representations of $$\sl(3,\CC)$$? Lie theory guarantees that there's the trivial one in dimension 1, the _standard representation_ $$\CC^3$$ and its dual $$(\CC^3)^\ast$$ in dimension 3, the adjoint representation in dimension 8, and all others have larger dimension. Note that $$\CC^3$$ and $$(\CC^3)^\ast$$ are _not_ equivalent! So a priori there's several possibilities what $$W$$ could be: either two copies of $$\CC^3$$ resp. $$(\CC^3)^\ast$$, or the sum $$\CC^3\oplus(\CC^3)^\ast$$.

However, adjoint representations of simple Lie algebras are always self-dual. In particular this holds for $$\fg_2$$,[^g2selfdual] and this doesn't change when we restrict the representation to a subalgebra. In addition to self-dual part $$\sl(3,\CC)$$, the complement $$W$$ must be self-dual as well -- and this leaves only the last of the above possibilities. That is, as a representation of the subalgebra $$\sl(3,\CC)$$, we have
\begin{equation}
\fg_2\cong\sl(3,\CC)\oplus\CC^3\oplus(\CC^3)^\ast.\label{g2decomp}
\end{equation}
What we just did is called _branching_ in representation theory -- understanding how a representation of a Lie group/algebra behaves under restriction to a subgroup/subalgebra.

So far, so good - nothing here that any decent standard reference or computer algebra system on representation theory can't already tell us. Indeed, here's the output of [LiE](http://www-math.univ-poitiers.fr/~maavl/LiE/) on the matter:

```
> setdefault(G2)
> rm=res_mat(A2)
> branch(adjoint,A2,rm)
     1X[0,1] +1X[1,0] +1X[1,1]
```

The `setdefault` tells LiE which Lie algebra to use for all subsequent function calls; the Lie algebra $$A_2$$ is precisely $$\sl(3,\CC)$$; the command `res_mat` looks up a _restriction matrix_ that tells us how $$\sl(3,\CC)$$ sits inside $$\fg_2$$; and finally, the `branch` command performs the branching and spits out a sum of three parts. These representations are denoted by their highest weights, a useful device in Lie theory -- but without knowing anything about weights, we can do a bit of prodding

```
> setdefault(A2)
> dim([0,1])
     3
> contragr([0,1])
     [1,0]
> adjoint
     1X[1,1]
```

and learn that `[0,1]` and `[1,0]` are three-dimensional representations of $$\sl(3,\CC)$$ which are each other's duals (or _contragredients_, if you insist on using fancy words), while `[1,1]` is the adjoint representation. This confirms \eqref{g2decomp}!

## Reconstructing $$\fg_2$$

Now that we know what $$\fg_2$$ looks like as a _representation_ of its subalgebra $$\sl(3,\CC)$$, we would like to construct its Lie bracket -- not in terms of octonions or root vectors, but in terms of decomposition \eqref{g2decomp}. That is, we need to define an alternating bilinear form
\\[\fg_2\times\fg_2\longrightarrow\fg_2,\qquad (x,y)\mapsto[x,y]\\]
satisfying the Jacobi identity. And it should please restrict to the Lie bracket on $$\sl(3,\CC)$$, and to the action on the complement: that is
\begin{align}
[X,Y]&=[X,Y]_{\sl(3,\CC)}&&\forall X,Y\in\sl(3,\CC)\label{obvious1}\\\\\
[X,v]&=Xv&&\forall X\in\sl(3,\CC),\ v\in\CC^3,\label{obvious2}\\\\\
[X,\alpha]&=\alpha X&&\forall X\in\sl(3,\CC),\ \alpha\in(\CC^3)^\ast.\label{obvious3}
\end{align}
So far this is just restating the decomposition \eqref{g2decomp}. Now comes the fun part: reconstructing the massing parts of the bracket.[^FH]

We would like our bracket to be completely $$\sl(3,\CC)$$-invariant. This is not only equivalent to the Jacobi identity \eqref{jacobi} where any one of $$x,y,z$$ lies in $$\sl(3,\CC)$$, but also heavily restricts the choices we can make. For instance, recall the following: $$\SL(3,\CC)$$ is the group of complex $$3\times3$$-matrices which have determinant equal to 1, or equivalently, which preserve any nonzero three-form $$\omega\in\Lambda^3(\CC^3)^\ast$$ (which we may call the _volume form_). In turn, there is an $$\sl(3,\CC)$$-equivalence $$\Lambda^2\CC^3\cong(\CC^3)^\ast$$, simply by mapping
\\[v\wedge w\mapsto\omega(v,w,\cdot\,),\\]
and dually $$\omega: \CC^3\cong\Lambda^3(\CC^3)^\ast$$, $$v\mapsto\omega(v,\cdot\,,\cdot\,)$$. In particular, $$\CC^3\not\cong\Lambda^2\CC^3\cong(\CC^3)^\ast$$ -- so there is no nontrivial alternating bilinear form $$\CC^3\times\CC^3\to\CC^3$$! We may apply similar considerations to other combinations of spaces in decomposition \eqref{g2decomp}, and find that the only nontrivial contributions besides \eqref{obvious1}--\eqref{obvious3} can come from
\begin{align}
\CC^3\times\CC^3&\longrightarrow(\CC^3)^\ast,\label{lam2Vtodual}\\\\\
(\CC^3)^\ast\times(\CC^3)^\ast&\longrightarrow\CC^3,\label{lam2dualtoV}\\\\\
\CC^3\times(\CC^3)^\ast&\longrightarrow\sl(3,\CC),\label{Vanddualtosl}\\\\\
(\CC^3)^\ast\times\CC^3&\longrightarrow\sl(3,\CC).\label{dualandVtosl}
\end{align}
Schur's Lemma tells us that any two equivalence of irreducible complex representations are multiples of each other -- in particular, the only choices we have for \eqref{lam2Vtodual} and \eqref{lam2dualtoV} are
\begin{align}
[v,w]&=a\cdot\omega(v,w,\,\cdot\,)&&\forall v,w\in\CC^3,\label{lam2Vtodualbracket}\\\\\
[\alpha,\beta]&=b\cdot\omega^{-1}(\alpha\wedge\beta)&&\forall \alpha,\beta\in(\CC^3)^\ast\label{lam2dualtoVbracket}
\end{align}
for some parameters $$a,b\in\CC$$.

Because a Lie bracket is alternating, \eqref{dualandVtosl} must simply be the negative of \eqref{Vanddualtosl}. It remains to construct \eqref{Vanddualtosl}, and again Schur's Lemma guarantees that there is (up to a factor) only one way to do this.

We may construct a bilinear map $$\CC^3\times(\CC^3)^\ast\to\gl(3,\CC)$$ by sending
\\[(v,\alpha)\mapsto v\alpha,\qquad (v\alpha)w:=\alpha(w)v\\]
for $$v,w\in\CC^3$$ and $$\alpha\in(\CC^3)^\ast$$ (for my notation to make sense, imagine $$v$$ as a column and $$\alpha$$ as a row vector). This is perfectly $$\sl(3,\CC)$$-invariant, but the result has a trace which we need to subtract in order to land in $$\sl(3,\CC)$$ (the space of _traceless_ complex $$3\times 3$$-matrices). The trace of $$v\alpha\in\gl(3,\CC)$$ is exactly given by $$\alpha(v)$$, so the bracket should look like
\begin{equation}
[v,\alpha]=c\cdot\left(v\alpha-\frac{1}{3}\alpha(v)\id_{3\times 3}\right)
\end{equation}
for some $$c\in\CC$$.

All that remains now is to find the right parameters $$a,b,c$$ that verify that Jacobi identity. .......

Here we see how the seemingly extremely difficult task of constructing an exceptional Lie algebra gets reduced to an equation in three variables by applying invariance principles.


# Footnotes

[^cartankilling]: The story of how $$\fg_2$$ was discovered and how the Cartan--Killing classification came to be is fascinating. Two great accounts are given in:

    I. Agricola: [Old  and  new  on  the  exceptional  group $$G_2$$](https://www.mathematik.uni-marburg.de/~agricola/pub/G2-notices.pdf). Notices Amer. Math. Soc. **55** (8), 922-929 (2008);
    
    A. J. Coleman: [The greatest mathematical paper of all time](https://doi.org/10.1007/BF03025189), The Mathematical Intelligencer **11**, 29--38 (1989).
    
[^octonions]: The octonions are the last of the four real division algebras ($$\RR,\CC,\HH,\OO$$), and the only non-associative one. They are called "octonions" because they have dimension 8 over $$\RR$$. It is said that they are responsible for the existence of many "exceptional" or "sporadic" objects in mathematics -- that is, objects which appear in classifications as more or less isolated entities, without belonging to an infinite family of related objects. A by now standard reference on the octonions and their consequences is:

    J. C. Baez: [The Octonions](https://math.ucr.edu/home/baez/octonions/), Bull. Amer. Math. Soc. **39**, 145-205 (2002). Errata in Bull. Amer. Math. Soc. **42**, 213 (2005).
    
[^su3stab]: Here's roughly how to do it: Let $$x$$ be some imaginary unit octonion, and let $$H=\mathrm{Stab}_{G_2}(x)$$ be the stabilizer of $$x$$ inside $$G_2$$. Then $$H$$ must preserve the 6-dimensional real subspace $$V:=x^\perp\cap\Im\OO$$, and is determined by its action on it. That is, it injects into $$\GL(6,\RR)$$. Now it is a fact that algebra automorphisms of $$\OO$$ preserve the inner product, that (left-)multiplication by $$x$$ is a complex structure on $$V$$, which is preserved by $$H$$, and that the canonical three-form $$\omega(u,v,w):=\langle uv,w\rangle$$ restricted to $$V$$ is a holomorphic volume form. Thus $$H\subseteq\rmO(6)\cap\SL(3,\CC)=\SU(3)$$.

    To see the reverse inclusion, one can either calculate that every element of $$\SU(3)$$ gives an automorphism of $$\OO$$ preserving $$x$$. Or, more elegantly, one may use the geometric fact that $$G_2$$ acts transitively on the 6-sphere (the unit sphere in $$\Im\OO$$), thus the stabilizer of a point must have dimension $$14-6=8$$, which is that of $$\SU(3)$$. Since $$\SU(3)$$ is already connected, necessarily $$H=\SU(3)$$!

[^jacobi]: I've often seen discussions on how to interpret the Jacobi identity. In my opinion, this is the simplest and most useful _algebraic_ interpretation; to get a geometric one, we integrate this one twice and see that Jacobi infinitesimally encodes conjugation being a group action.
[^g2selfdual]: As a matter of fact, every representation of $$G_2$$ is self-dual, but I forgot how to prove it.
[^FH]: This particular construction of the bracket of $$\fg_2$$ is thoroughly detailed in §22.2 of my most prized possession:

    W. Fulton, J. Harris: [Representation Theory: A First Course](https://doi.org/10.1007/978-1-4612-0979-9), Graduate Texts in Mathematics **129**, Springer (2004).
    
    However, it discusses first the root system of $$\fg_2$$ and uses it to infer the bracket, while this post tries to showcase the construction purely intrinsically.
