---
layout: post
title:  "Some constructions of \\(G_2\\)"
date:   2024-11-14
categories: miscellaneous
---
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

The `setdefault` tells LiE which Lie algebra to use for all subsequent function calls; the Lie algebra $$A_2$$ is precisely $$\sl(3,\CC)$$; the command `res_mat` looks up a _restriction matrix_ that tells us how $$\sl(3,\CC)$$ sits inside $$\fg_2$$; and finally, the `branch` command performs the branching and spits out a sum of three parts. These representations are denoted by their highest weights, a useful device in Lie theory -- but even without knowing anything about weights, we can do a bit of prodding

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
So far this is just restating the decomposition \eqref{g2decomp}. Now comes the fun part: reconstructing the missing parts of the bracket.[^FH]

We would like our bracket to be completely $$\sl(3,\CC)$$-invariant. This is not only equivalent to the Jacobi identity \eqref{jacobi} where any one of $$x,y,z$$ lies in $$\sl(3,\CC)$$, but also heavily restricts the choices we can make. For instance, recall the following: $$\SL(3,\CC)$$ is the group of complex $$3\times3$$-matrices which have determinant equal to 1, or equivalently, which preserve any nonzero three-form $$\omega\in\Lambda^3(\CC^3)^\ast$$ (which we may call the _volume form_). This volume form gives an $$\sl(3,\CC)$$-equivalence
\\[\omega: \Lambda^2\CC^3\stackrel{\sim}{\longrightarrow}(\CC^3)^\ast,\qquad v\wedge w\mapsto\omega(v\wedge w):=\omega(v,w,\cdot\,),\\]
and dually, we have an equivalence
\\[\omega: \CC^3\stackrel{\sim}{\longrightarrow}\Lambda^3(\CC^3)^\ast,\qquad v\mapsto\omega(v):=v\intprod\omega=\omega(v,\cdot\,,\cdot\,).\\]
In particular, $$\CC^3\not\cong\Lambda^2\CC^3\cong(\CC^3)^\ast$$ -- so there is no nontrivial alternating bilinear form $$\CC^3\times\CC^3\to\CC^3$$! We may apply similar considerations to other combinations of spaces in decomposition \eqref{g2decomp}, and find that the only nontrivial contributions besides \eqref{obvious1}--\eqref{obvious3} can come from
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
for $$v,w\in\CC^3$$ and $$\alpha\in(\CC^3)^\ast$$ (for my notation to make sense, imagine $$v$$ as a column and $$\alpha$$ as a row vector). This is perfectly $$\sl(3,\CC)$$-invariant, but the result has a trace which we need to cancel out in order to land in $$\sl(3,\CC)$$ (the space of _traceless_ complex $$3\times 3$$-matrices). The trace of $$v\alpha\in\gl(3,\CC)$$ is exactly given by $$\alpha(v)$$, so the bracket should look like
\begin{equation}
[v,\alpha]=c\cdot\left(v\alpha-\frac{1}{3}\alpha(v)\id_{3\times 3}\right)\label{Vanddualbracket}
\end{equation}
for some $$c\in\CC$$.

All that remains now is to find the right parameters $$a,b,c$$ that verify the Jacobi identity.

## Jacobian juggling

As mentioned earlier, because the bracket constructed to far is $$\sl(3,\CC)$$-invariant, it satisfies the Jacobi identity \eqref{jacobi} whenever at least one of the elements $$x,y,z$$ is in $$\sl(3,\CC)$$. By trilinearity and the cyclic nature of the Jacobi identity, it remains to show it for the parts
\\[\CC^3\times\CC^3\times\CC^3,\quad\CC^3\times\CC^3\times(\CC^3)^\ast,\quad\CC^3\times(\CC^3)^\ast\times(\CC^3)^\ast,\quad(\CC^3)^\ast\times(\CC^3)^\ast\times(\CC^3)^\ast.\\]
Let's do them one by one. For $$u,v,w\in\CC^3$$, plugging our definitions \eqref{lam2Vtodualbracket} & \eqref{Vanddualbracket} of the bracket into \eqref{jacobi} yields
\begin{align}
[u,[v,w]]+[v,[w,u]]+[w,[u,v]]&=a\cdot\left([u,\omega(v\wedge w)]+[v,\omega(w\wedge u)]+[w,\omega(u\wedge v)]\right)\notag\\\\\
&=ac\cdot\Big(u\omega(v\wedge w)+v\omega(w\wedge u)+w\omega(u\wedge v)\notag\\\\\
&\qquad\qquad-\frac{1}{3}\left(\omega(v,w,u)+\omega(w,u,v)+\omega(u,v,w)\right)\id_{3\times3}\Big)\notag\\\\\
&=ac\cdot\left(u\omega(v\wedge w)+v\omega(w\wedge u)+w\omega(u\wedge v)-\omega(u,v,w)\id_{3\times3}\right),\label{Vthricejacobi1}
\end{align}
using the antisymmetry of $$\omega$$ in the last step. Hm, that looks messy. But taking a step back and looking at the involved _symmetries_ helps! Notice first that the left hand side of the Jacobi identity \eqref{jacobi} is a _cyclic sum_ (that is, we sum over all _cyclic_ permutations of the arguments) over the double bracket $$[\,\cdot\,,[\,\cdot\,,\cdot\,]]\in\fg^\ast\otimes\Lambda^2\fg^\ast$$. I shall leave it to the reader to check that taking the cyclic sum over a tensor which is (anti-)symmetric in any two arguments results in a tensor that is fully (anti-)symmetric. In this particular case, the cyclic sum maps
\\[\fg^\ast\otimes\Lambda^2\fg^\ast\longrightarrow\Lambda^3\fg^\ast.\\]
This means that the left hand side of \eqref{jacobi} depends only on the trivector $$x\wedge y\wedge z$$.

Returning to the Jacobi identity on $$\CC^3\times\CC^3\times\CC^3$$, we now know that the left hand side of \eqref{Vthricejacobi1} depends only on $$u\wedge v\wedge w\in\Lambda^3\CC^3$$ -- which is one-dimensional! We might as well choose a basis $$(e_1,e_2,e_3)$$ of $$\CC^3$$ such that, with the dual basis $$(e^1,e^2,e^3)$$, the volume form is simple $$\omega=e^1\wedge e^2\wedge e^3$$, and then we can write $$u\wedge v\wedge w=\omega(u,v,w)e_1\wedge e_2\wedge e_3$$. And combining this with \eqref{Vthricejacobi1}, we obtain
\begin{align}
[u,[v,w]]+[v,[w,u]]+[w,[u,v]]&=ac\omega(u,v,w)\cdot\left(e_1\omega(e_2\wedge e_3)+e_2\omega(e_3\wedge e_1)+e_3\omega(e_1\wedge e_2)-\id_{3\times3}\right)\notag\\\\\
&=ac\omega(u,v,w)\cdot\left(e_1e^1+e_2e^2+e_3e^3-\id_{3\times3}\right)=0
\end{align}
because $$\id_{3\times3}=\sum_ie_ie^i$$.

We can play the same game on $$(\CC^3)^\ast\times(\CC^3)^\ast\times(\CC^3)^\ast$$. For any $$\alpha,\beta,\gamma\in(\CC^3)^\ast$$, the three-form $$\alpha\wedge\beta\wedge\gamma\in\Lambda^3(\CC^3)^\ast$$ must be proportional to $$\omega$$ because $$\Lambda^3(\CC^3)^\ast$$ is one-dimensional. Thus we may write[^fraction]
\\[\alpha\wedge\beta\wedge\gamma=\frac{\alpha\wedge\beta\wedge\gamma}{\omega}e^1\wedge e^2\wedge e^3.\\]
Plugging this into \eqref{jacobi} and using the definitions \eqref{lam2dualtoVbracket} & \eqref{Vanddualbracket}, we find
\begin{align}
[\alpha,[\beta,\gamma]]+[\beta,[\gamma,\alpha]]+[\gamma,[\alpha,\beta]]&=b\frac{\alpha\wedge\beta\wedge\gamma}{\omega}\cdot\left([e^1,\omega^{-1}(e^2\wedge e^3)]+[e^2,\omega^{-1}(e^3\wedge e^1)]+[e^3,\omega^{-1}(e^1\wedge e^2)]\right)\notag\\\\\
&=b\frac{\alpha\wedge\beta\wedge\gamma}{\omega}\cdot\left([e^1,e_1]+[e^2,e_2]+[e^3,e_3]\right)\notag\\\\\
&=-bc\frac{\alpha\wedge\beta\wedge\gamma}{\omega}\cdot\left(e_1e^1+e_2e^2+e_3e^3-\frac{1+1+1}{3}\id_{3\times3}\right)=0.
\end{align}
Notice how the vanishing of these terms does not actually depend on the values of $$a,b,c$$. This will change once we start mixing representations.

For $$v,w\in\CC^3$$ and $$\alpha\in(\CC^3)^\ast$$, we use \eqref{lam2Vtodualbracket}, \eqref{Vanddualbracket} & \eqref{obvious2} to calculate
\begin{align}
[v,[w,\alpha]]+[w,[\alpha,v]]+[\alpha,[v,w]]&=c\left[v,w\alpha-\frac{1}{3}\alpha(w)\id_{3\times 3}\right]-c\left[w,v\alpha-\frac{1}{3}\alpha(v)\id_{3\times3}\right]+a\left[\alpha,\omega(v\wedge w)\right]\notag\\\\\
&=\frac{4c}{3}\cdot\left(\alpha(w)v-\alpha(v)w\right)+ab\cdot\omega^{-1}(\alpha\wedge\omega(v\wedge w)).\label{Vtwicedualoncejacobi1}
\end{align}
To simplify this further, we may apply the isomorphism $$\omega: \CC^3\to\Lambda^2(\CC^3)^\ast$$ and rewrite a bit to obtain
\begin{equation}
\frac{4c}{3}\cdot(\alpha(w)(v\intprod\omega)-\alpha(v)(w\intprod\omega))+ab\cdot\alpha\wedge(w\intprod v\intprod\omega).\label{Vtwicedualoncejacobi2}
\end{equation}
Now, let's put to use some classical identities, in this case that the interior product $$v\intprod$$ always acts as an _antiderivation_ for the exterior product, i.e.
\\[u\intprod(\xi\wedge\eta)=(u\intprod\xi)\wedge\eta+(-1)^{\deg\xi}\xi\wedge(u\intprod\eta)\qquad\forall u\in V,\ \xi,\eta\in\Lambda^\bullet V^\ast\\]
(where $$V$$ is any vector space). Using this, we may calculate
\begin{equation}
w\intprod v\intprod(\alpha\wedge\omega)=w\intprod(\alpha(v)\omega-\alpha\wedge(v\intprod\omega))=\alpha(v)(w\intprod\omega)-\alpha(w)(v\intprod\omega)+\alpha\wedge(w\intprod v\intprod\omega).\label{fourform}
\end{equation}
But $$\alpha\wedge\omega$$ is a four-form on $$\CC^3$$ -- meaning it, and thus the left hand side of \eqref{fourform}, must be zero! Using this identity, we can rewrite \eqref{Vtwicedualoncejacobi2} into
\\[\left(\frac{4c}{3}+ab\right)\cdot\alpha\wedge(w\intprod v\intprod\omega),\\]
and since $$\omega$$ is nondegenerate this can only vanish identically for all $$v,w,\alpha$$ if
\begin{equation}
\frac{4c}{3}+ab=0.\label{jacobicond}
\end{equation}
The calculation for the last remaining triple $$\CC^3\times(\CC^3)^\ast\times(\CC^3)^\ast$$ works similarly, only reversing the roles of $$\CC^3$$ and $$(\CC^3)^\ast$$. I'll leave it as an exercise to show that it yields the same condition \eqref{jacobicond}.

## The finishing touches

In the last section, we saw how the seemingly daunting task of constructing an exceptional Lie algebra gets reduced to an equation in three variables by applying invariance principles. Now what we have actually obtained is not just one Lie bracket, but an entire _family_ of them, depending on parameters $$a,b,c\in\CC$$, constrained by equation \eqref{jacobicond}. I will suggestively denote them by $$[\,\cdot\,,\cdot\,]_{a,b,c}$$ to distinguish between them.

We know that the actual Lie bracket of $$\fg_2$$ has to lie somewhere in this family, but which is it?

Suppose first that one of the parameters is zero: say $$b=0$$ (and thus $$c=0$$). This means that the parts \eqref{lam2dualtoV} -- \eqref{dualandVtosl} of the bracket would vanish. In particular, $$\CC^3\oplus(\CC^3)^\ast$$ would be a (nilpotent) ideal of the Lie algebra (same if $$a=0$$). But $$\fg_2$$ is simple, meaning it cannot have any nontrivial ideals! So we have to take $$a,b,c$$ to be nonzero.

An arbitrary choice for $$a,b,c$$ satisfying \eqref{jacobicond} would for example be
\\[a=2,\qquad b=-2,\qquad c=3.\\]
So let $$[\,\cdot\,,\cdot\,]:=[\,\cdot\,,\cdot\,]_{2,-2,3}$$. It is indeed the case that the brackets $$[\,\cdot\,,\cdot\,]_{a,b,c}$$ with $$a,b,c\neq0$$ give rise to isomorphic Lie algebras -- here is an isomorphism:[^cbrt]
\\[(\sl(3,\CC)\oplus\CC^3\oplus(\CC^3)^\ast,[\,\cdot\,,\cdot\,])\stackrel{\sim}{\to}(\sl(3,\CC)\oplus\CC^3\oplus(\CC^3)^\ast,[\,\cdot\,,\cdot\,]_{a,b,c}),\qquad (X,v,\alpha)\mapsto\left(X,-\frac{2}{\sqrt[3]{a^2b}}v,\frac{2}{\sqrt[3]{ab^2}}\alpha\right).\\]
And since there's no other option -- by construction, the Lie bracket of $$\fg_2$$ must occur somewhere in this family -- these must be isomorphic to the simple Lie algebra $$\fg_2$$. That's it. End of story?

## The root system of type $$G_2$$

Recall that all of the above relied on the fact that $$\sl(3,\CC)$$ is a subalgebra of $$\fg_2$$. One quite elegant way to see this is by inspecting the root system of type $$G_2$$.

The most vital step in the classification of Cartan and Killing was to notice that a semisimple Lie algebra can be completely encoded in a combinatorial object called its _root system_. Let $$\fg$$ be some semisimple[^semisimple] Lie algebra, and let again $$\ad$$ denote its adjoint representation. First, one has to choose what is called a _Cartan subalgebra_: a subalgebra $$\ft\subset\fg$$ which is maximal among those with the property that for all $$u\in\ft$$, the endomorphism $$\ad u\in\gl(\fg)$$ is diagonalizable.

Such a Cartan subalgebra turns out to always exist, and they all have the same dimension. The invariant $$\dim\ft$$ is called the _rank_ of $$\fg.$$ For example, a possible choice of Cartan subalgebra for $$\fg=\sl(n,\CC)$$ would be the subalgebra of diagonal matrices (since they satisfy the constraint that all diagonal entries sum to zero, the rank of $$\sl(n,\CC)$$ is $$n-1$$). For $$\fg_2$$, the rank is two.

Moreover every Cartan algebra $$\ft$$ is abelian. The Jacobi identity implies that the $$\ad u$$, $$u\in\ft$$, all commute -- thus they are simultaneously diagonalizable! This proves the _root space decomposition_:
\begin{equation}
\fg=\ft\oplus\bigoplus_{\alpha\in R}\fg_\alpha,
\label{rootspacedecomp}
\end{equation}
where the $$\fg_\alpha$$ are the simultaneous eigenspaces for $$\ad\ft$$, called _root spaces_. We can write them as
\\[\fg_\alpha=\\{x\in\fg\,|\,\forall u\in\ft,\ [u,x]=\alpha(u)x\\},\\]
for certain linear functionals $$\alpha\in\ft^\ast$$ called _roots_ (if they are nonzero). The finite set $$R\subset\ft^\ast$$ of all roots occurring in \eqref{rootspacedecomp} is called the _root system_ of $$\fg$$, and it does not essentially depend on the choice of $$\ft$$.

The monumental achievement of Killing and Cartan was to develop the theory of root systems, to show that every semisimple Lie algebra is determined by its root system, and to classify the root systems! Each one is a product of simple root systems, which in turn come in four infinite families $$A_n,B_n,C_n,D_n$$ (corresponding to the _classical_ Lie algebras $$\sl(n+1,\CC)$$, $$\so(2n+1,\CC)$$, $$\sp(2n,\CC)$$, $$\so(2n,\CC)$$, respectively), and five exceptions $$E_6,E_7,E_8,F_4,G_2$$ (corresponding to the _exceptional_ Lie algebras, of which $$\fg_2$$ is the smallest).

Here is the root system of type $$G_2$$:

<p align="center">
<script type="text/tikz">
\begin{tikzpicture}
    \begin{scope}[y={(150:2*sqrt(3)},x={(2,0)}]
    \foreach \ii in {-2, -1, 0, 1, 2} {
        \draw[help lines] (-3+1.5*\ii,\ii) -- (3+1.5*\ii,\ii);
    }
    \foreach \ii in {-2, -1, 0, 1, 2} {
        \draw[help lines] (-2+\ii,-2) -- (2+\ii,2);
    }
    \draw[help lines] (-5,-2) -- (-3,0);
    \draw[help lines] (3,0) -- (5,2);
    \foreach \ii in {-2, -1, 0, 1, 2} {
        \draw[help lines] (-4+\ii,-2) -- (4+\ii,2);
    }
    \draw[help lines] (-3,0) -- (1,2);
    \draw[help lines] (-1,-2) -- (3,0);
    \draw[->,thick] (0,0) -- (1,0);
    \draw[->,thick] (0,0) -- (-1,0);
    \draw[->,thick] (0,0) -- (1,1);
    \draw[->,thick] (0,0) -- (-1,-1);
    \draw[->,thick] (0,0) -- (2,1);
    \draw[->,thick] (0,0) -- (-2,-1);
    \draw[->,thick] (0,0) -- (0,1);
    \draw[->,thick] (0,0) -- (0,-1);
    \draw[->,thick] (0,0) -- (3,1);
    \draw[->,thick] (0,0) -- (-3,-1);
    \draw[->,thick] (0,0) -- (3,2);
    \draw[->,thick] (0,0) -- (-3,-2);
    \Large
    \node at (0,1.67) {$G_2$};
    \end{scope}
\end{tikzpicture}
</script>
</p>

For this depiction we have utilized that all roots lie in a _real_ subspace of $$\ft^\ast$$. They also span a lattice of rank equal to $$\dim\ft$$. In the case of $$\fg_2$$, this means that the root system fits inside a plane. As you can see, there are six _long_ and six _short_ roots[^tinprod].

Let us now take a look at the root system of $$\sl(3,\CC)$$ (of type $$A_2$$):

<p align="center">
<script type="text/tikz">
\begin{tikzpicture}
    \begin{scope}[y={(150:2*sqrt(3)},x={(2,0)}]
    \foreach \ii in {-2, 0, 2} {
        \draw[help lines] (-3+1.5*\ii,\ii) -- (3+1.5*\ii,\ii);
    }
    \foreach \ii in {-2, 0, 2} {
        \draw[help lines] (-2+\ii,-2) -- (2+\ii,2);
    }
    \foreach \ii in {-2, 0, 2} {
        \draw[help lines] (-4+\ii,-2) -- (4+\ii,2);
    }
    \draw[->,thick] (0,0) -- (2,0);
    \draw[->,thick] (0,0) -- (-2,0);
    \draw[->,thick] (0,0) -- (2,2);
    \draw[->,thick] (0,0) -- (-2,-2);
    \draw[->,thick] (0,0) -- (4,2);
    \draw[->,thick] (0,0) -- (-4,-2);
    \Large
    \node at (0,1.67) {$A_2$};
    \end{scope}
\end{tikzpicture}
</script>
</p>

Notice that the $$G_2$$ root system looks like two superimposed copies of the $$A_2$$ root system! Take now the Cartan subalgebra of $$\fg_2$$ together with the root spaces corresponding only to the _long_ roots (now marked in red),
\begin{equation}
\fh:=\ft\oplus\bigoplus_{\alpha\text{ long root}}\fg_\alpha\subset\fg_2.
\label{su3ing2}
\end{equation}
<p align="center">
<script type="text/tikz">
\begin{tikzpicture}
    \begin{scope}[y={(150:2*sqrt(3)},x={(2,0)}]
    \foreach \ii in {-2, -1, 0, 1, 2} {
        \draw[help lines] (-3+1.5*\ii,\ii) -- (3+1.5*\ii,\ii);
    }
    \foreach \ii in {-2, -1, 0, 1, 2} {
        \draw[help lines] (-2+\ii,-2) -- (2+\ii,2);
    }
    \draw[help lines] (-5,-2) -- (-3,0);
    \draw[help lines] (3,0) -- (5,2);
    \foreach \ii in {-2, -1, 0, 1, 2} {
        \draw[help lines] (-4+\ii,-2) -- (4+\ii,2);
    }
    \draw[help lines] (-3,0) -- (1,2);
    \draw[help lines] (-1,-2) -- (3,0);
    \draw[->,thick] (0,0) -- (1,0);
    \draw[->,thick] (0,0) -- (-1,0);
    \draw[->,thick] (0,0) -- (1,1);
    \draw[->,thick] (0,0) -- (-1,-1);
    \draw[->,thick] (0,0) -- (2,1);
    \draw[->,thick] (0,0) -- (-2,-1);
    \draw[->,thick,red] (0,0) -- (0,1);
    \draw[->,thick,red] (0,0) -- (0,-1);
    \draw[->,thick,red] (0,0) -- (3,1);
    \draw[->,thick,red] (0,0) -- (-3,-1);
    \draw[->,thick,red] (0,0) -- (3,2);
    \draw[->,thick,red] (0,0) -- (-3,-2);
    \Large
    \node at (0,1.67) {$G_2$};
    \end{scope}
\end{tikzpicture}
</script>
</p>

In a semisimple Lie algebra $$\fg$$, the root spaces always satisfy 
\\[[\fg_{\alpha},\fg_{\beta}]\subset\fg_{\alpha+\beta},\\]
where $$\fg_0=\ft$$ and $$\fg_{\alpha+\beta}=0$$ if $$\alpha+\beta$$ is neither zero nor a root. In the above picture, a sum of long roots is never a root, and as a consequence $$\fh$$ is a subalgebra of $$\fg_2$$. However there are some short roots summing to long roots -- so if we had used short instead of long roots, $$\fh$$ would not be closed under the Lie bracket.

Now the subalgebra $$\fh\subset\fg_2$$ is isomorphic to $$\sl(3,\CC)$$. Why? Because, pretty much by definition, its root space decomposition is precisely \eqref{su3ing2}, and the root system determines the isomorphism type!


## Constructions of $$G_2$$ from other subalgebras

In general, not every subalgebra of a semisimple Lie algebra $$\fg$$ is visible from its root system. But it is the case for $$\sl(3,\CC)\subset\fg_2$$, and for another subalgebra as well: one isomorphic to $$\sl(2,\CC)\oplus\sl(2,\CC)$$.

The (complex) Lie algebra $$\sl(2,\CC)$$ is of type $$A_1$$, and its root system is pretty boring:

<p align="center">
<script type="text/tikz">
\begin{tikzpicture}
    \draw[help lines] (-5,0) -- (5,0);
    \draw[->,thick] (0,0) -- (2,0);
    \draw[->,thick] (0,0) -- (-2,0);
    \Large
    \node at (-4,1) {$A_1$};
\end{tikzpicture}
</script>
</p>

For a direct sum of Lie algebras, the root system is just the Cartesian product of the root system of the factors:

<p align="center">
<script type="text/tikz">
\begin{tikzpicture}[scale=2]
    \draw[help lines] (-2,-2) grid (2,2);
    \draw[->,thick] (0,0) -- (1,0);
    \draw[->,thick] (0,0) -- (-1,0);
    \draw[->,thick] (0,0) -- (0,1);
    \draw[->,thick] (0,0) -- (0,-1);
    \Large
    \node at (-1.5,1.5) {$A_1\times A_1$};
\end{tikzpicture}
</script>
</p>

If you squish it a bit, it fits inside the root system of type $$G_2$$, and as above one may check that it defines a subalgebra. Again, the roots that we identify with roots of $$\sl(2,\CC)\oplus\sl(2,\CC)$$ are marked in red:

<p align="center">
<script type="text/tikz">
\begin{tikzpicture}
    \begin{scope}[y={(150:2*sqrt(3)},x={(2,0)}]
    \foreach \ii in {-2, -1, 0, 1, 2} {
        \draw[help lines] (-3+1.5*\ii,\ii) -- (3+1.5*\ii,\ii);
    }
    \foreach \ii in {-2, -1, 0, 1, 2} {
        \draw[help lines] (-2+\ii,-2) -- (2+\ii,2);
    }
    \draw[help lines] (-5,-2) -- (-3,0);
    \draw[help lines] (3,0) -- (5,2);
    \foreach \ii in {-2, -1, 0, 1, 2} {
        \draw[help lines] (-4+\ii,-2) -- (4+\ii,2);
    }
    \draw[help lines] (-3,0) -- (1,2);
    \draw[help lines] (-1,-2) -- (3,0);
    \draw[->,thick,red] (0,0) -- (1,0);
    \draw[->,thick,red] (0,0) -- (-1,0);
    \draw[->,thick] (0,0) -- (1,1);
    \draw[->,thick] (0,0) -- (-1,-1);
    \draw[->,thick] (0,0) -- (2,1);
    \draw[->,thick] (0,0) -- (-2,-1);
    \draw[->,thick] (0,0) -- (0,1);
    \draw[->,thick] (0,0) -- (0,-1);
    \draw[->,thick] (0,0) -- (3,1);
    \draw[->,thick] (0,0) -- (-3,-1);
    \draw[->,thick,red] (0,0) -- (3,2);
    \draw[->,thick,red] (0,0) -- (-3,-2);
    \Large
    \node at (0,1.67) {$G_2$};
    \end{scope}
\end{tikzpicture}
</script>
</p>

If you wonder what the branching of the adjoint representation to this subalgebra looks like, here you go:
\\[\fg_2\cong\sl(A)\oplus\sl(B)\oplus(A\otimes\Sym^3B).\\]
Here $$A$$ and $$B$$ stand for copies of $$\CC^2$$, just so we can distinguish the $$\sl(2,\CC)$$'s and their representations.

One thing to mention about this subalgebra that it corresponds to an $$\so(4)$$ sitting inside the compact real $$\fg_2$$, and the quotient $$G_2/\SO(4)$$ is a symmetric space! This implies[^symmetric] that the only missing part of the bracket is
\\[(A\otimes\Sym^3B)\times(A\otimes\Sym^3B)\longrightarrow\sl(A)\oplus\sl(B).\\]
I haven't yet reconstructed the Lie bracket, but it must be possible somehow -- I'll leave it as an exercise for the inclined reader.

The subalgebras $$\sl(3,\CC)$$ and $$\sl(A)\oplus\sl(B)$$ are both _maximal_ in $$\fg_2$$. Another maximal subalgebra of $$\fg_2$$, this time only of rank 1, is the _principal_ subalgebra $$\sl(2,\CC)_{\mathrm{irr}}$$. The branching looks like this:
\\[\fg_2=\sl(2,\CC)_{\mathrm{irr}}\oplus\Sym^{10}\CC^2\\]
(yes, that is a power of ten).

The $$\sl(2,\CC)_{\mathrm{irr}}$$-invariant reconstruction of the Lie bracket on $$\fg_2$$ is briefly summarized in §3.9 of the article _Reductive homogeneous spaces of the compact Lie group $$G_2$$_ by Draper and Palomo.[^draperpalomo] It uses bilinear operations called _transvections_[^dixmier]
\\[\Sym^m\CC^2\times\Sym^n\CC^2\longrightarrow\Sym^{m+n-2q}\CC^2.\\]
In an article of Bremner and Hentzel,[^nonassoc] these transvections are even used to construct the octonionic multiplication![^so3octonions] And I suspect they might also help with the $$\sl(A)\oplus\sl(B)$$-case. But that is a story for another day.

This was a long post. Time to rest.
<p align="center">
<img src="/assets/sleepy.png" alt="Now I am become sleepy, the goer to bed.">
</p>


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

[^fraction]: This way of dividing differential forms is legitimate since they live in a one-dimensional vector space. Now there are actually people who use this as a justification to argue that _of course, $$\frac{\dd f}{\dd x}$$ is a fraction_ (if $$f$$ is a differentiable function of one variable). While technically true once one has jumped through the hoop of learning exterior calculus, I'll leave it to you to decide whether this is a good didactical approach for first-time students of (ordinary) calculus...
[^cbrt]: Oh yeah, complex numbers, right. The cube roots have to be chosen such that $$\sqrt[3]{a^2b}\cdot\sqrt[3]{ab^2}=ab$$.
[^semisimple]: Similar to groups, there are basically two "worlds" of Lie algebras: the _solvable_ ones and the _semisimple_ ones. A Lie algebra $$\fg$$ is called _semisimple_ if $$\fg$$ has no solvable ideals. By the _Levi decomposition theorem_ every Lie algebra over $$\CC$$ can be written as a semidirect product of a semisimple subalgebra and a solvable ideal. Every semisimple Lie algebra is isomorphic to a sum of simple ideals (_simple_ = no nontrivial ideals at all).
[^tinprod]: Don't worry, there exists a canonical inner product on the root lattice making this precise. This allows us to think of a root system as living in some Euclidean space.
[^symmetric]: Symmetric spaces are the best-behaved homogeneous spaces, in a sense. Roughly, a symmetric space is a manifold which has a reflection symmetry through each point. This implies that it has a transitive group $$G$$ of symmetries and can thus be written as a homogeneous space $$G/K$$, where $$K$$ is the stabilizer of a point. If $$G/K$$ is a symmetric space, with a $$K$$-invariant decomposition of the adjoint representation $$\fg=\fk\oplus\fp$$, then the bracket relation $$[\fp,\fp]\subset\fk$$ is satisfied. Conversely, any homogeneous space with this property is symmetric.
[^draperpalomo]: C. Draper, F. J. Palomo: [Reductive homogeneous spaces of the compact Lie group $$G_2$$](https://doi.org/10.1007/978-3-031-32707-0_3), in: Non-Associative Algebras and Related Topics NAART II, Springer Proceedings in Mathematics & Statistics **427**, Springer, 2023.
[^dixmier]: J. Dixmier: [Certaines algèbres non associatives simples définies par la transvection des formes binaires](https://doi.org/10.1515/crll.1984.346.110), J. Reine Angew. Math. **346**, 110–128 (1984).
[^nonassoc]: M. Bremner, I. Hentzel: [Invariant nonassociative algebra structures on irreducible representations of simple Lie algebras](https://doi.org/10.1080/10586458.2004.10504536), Experiment. Math. **13** (2), 231-256 (2004).
[^so3octonions]: How the principal subalgebra $$\sl(2,\CC)_{\mathrm{irr}}$$, or rather its real form $$\so(3)_{\mathrm{irr}}$$, fits together with the octonion multiplication, resp. the cross product on $$\RR^7$$, has also been mused about in the n-Category Café: see [here](https://golem.ph.utexas.edu/category/2024/05/3d_rotations_and_the_cross_pro.html), [here](https://golem.ph.utexas.edu/category/2024/05/lanthanides_and_the_exceptiona.html) and [here](https://golem.ph.utexas.edu/category/2024/06/3d_rotations_and_the_7d_cross.html). Thanks to John Baez for taking interest in this question!
