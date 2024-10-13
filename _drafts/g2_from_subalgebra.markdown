---
layout: post
title:  "Some constructions of \\(G_2\\)"
---
How to build the (complex) Lie algebra $$\fg_2$$ from its subalgebra $$\sl_3$$ (or $$\sl_2\times\sl_2$$). Construction without Lie theory, see subalgebras in root system. Relation to octonions.

In the late 19th century, Cartan and Killing classified the complex simple Lie algebras (and with them the complex resp. compact simple Lie groups).[^cartankilling] They obtained four infinite series $$A_n,B_n,C_n,D_n$$, as well as the four exceptional Lie groups $$E_6,E_7,E_8,F_4,G_2$$ (here the subscript indicates the so-called _rank_). The classification relies on reducing the structure of a simple Lie algebra to that of its _root system_, and then classifying these. Root system are systems of vectors in a finite-dimensional Euclidean space, satisfying certain very restrictive properties. We will get back to these later -- for now, it suffices to note that any simple Lie algebra may be reconstructed from its root system. In particular, this makes it possible to construct the exceptional Lie algebras $$\fe_6,\fe_7,\fe_8,\ff_4,\fg_2$$. However, these Lie algebras remain somewhat mysterious, and one cannot help but wonder about their geometric meaning.

Enter the octonions $$\OO$$![^octonions] As it turns out, the (compact, real) Lie group $$G_2$$ may be succinctly described as their automorphism group, that is
\\[G_2=\Aut\OO=\\{f\in\GL(\OO)\,\|\,f(xy)=f(x)f(y)\quad \forall x,y\in\OO\\}.\\]
Its Lie algebra $$\fg_2$$ hence consists of "infinitesimal automorphisms", i.e. _derivations_ of $$\OO$$:
\\[\fg_2=\mathfrak{der}(\OO)=\\{A\in\gl(\OO)\,\|\,A(xy)=A(x)y+xA(y)\quad \forall x,y\in\OO\\}.\\]
When dealing with the geometry of $$G_2$$ or its subgroups, the octonionic picture is often helpful. For example, the subgroup $$\SU(3)\subset G_2$$ may be defined as the stabilizer of some imaginary octonion (and consequentially, the subalgebra $$\su(3)\subset\fg_2$$ as its annihilator).

Today, I will depart from the octonionic setting and showcase an elementary construction of the Lie algebra $$\fg_2$$ that does not use any Lie-theoretic machinery like roots -- although later we will see that the whole construction can be elegantly predicted by looking at the root system of $$\fg_2$$.



# Footnotes

[^cartankilling]: The story of how $$\fg_2$$ was discovered and how the Cartan--Killing classification came to be is fascinating. Two great accounts are given in:

    I. Agricola: [Old  and  new  on  the  exceptional  group $$G_2$$](https://www.mathematik.uni-marburg.de/~agricola/pub/G2-notices.pdf). Notices Amer. Math. Soc. **55** (8), 922-929 (2008);
    
    A. J. Coleman: [The greatest mathematical paper of all time](https://doi.org/10.1007/BF03025189), The Mathematical Intelligencer **11**, 29--38 (1989).
    
[^octonions]: The octonions are the last of the four real division algebras ($$\RR,\CC,\HH,\OO$$), and the only non-associative one. They are called "octonions" because they have dimension 8 over $$\RR$$. It is said that they are responsible for the existence of many "exceptional" or "sporadic" objects in mathematics -- that is, objects which appear in classifications as more or less isolated entities, without belonging to an infinite family of related objects. A by now standard reference on the octonions and their consequences is:

    J. C. Baez: [The Octonions](https://math.ucr.edu/home/baez/octonions/), Bull. Amer. Math. Soc. **39**, 145-205 (2002). Errata in Bull. Amer. Math. Soc. **42**, 213 (2005). 
