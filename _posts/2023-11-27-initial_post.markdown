---
layout: post
title:  "Look mom, I'm on the internet!"
date:   2023-11-27 22:25:00 +0100
categories: miscellaneous
---
So this is my shiny new personal website. Okay, so far it looks pretty minimal. 
But after the initial struggles with Jekyll and Git, I am happy that it works at all.

We even have MathJax and TikzJax support (although for commutative diagrams it is currently easier to embed them from Quiver). See for yourselves:

\begin{align}
\Gamma(z)&=\int_0^\infty t^{z-1}e^t\,\dd t\\\\\
\zeta(s)&=\frac{1}{s-1}+\frac{1}{2}+2\int_0^\infty\frac{\sin(s\arctan t)}{(1+t^2)^{s/2}(e^{2\pi t}-1)}\,\dd t
\end{align}

<p align="center">
<script type="text/tikz">
  \begin{tikzpicture}
    \draw (0,0) circle (1in);
  \end{tikzpicture}
</script>
</p>

<p align="center">
<!-- https://q.uiver.app/#q=WzAsMyxbMCwwLCJBIl0sWzIsMCwiQiJdLFsxLDEsIkMiXSxbMCwxXSxbMCwyXSxbMiwxXV0= -->
<iframe class="quiver-embed" src="https://q.uiver.app/#q=WzAsMyxbMCwwLCJBIl0sWzIsMCwiQiJdLFsxLDEsIkMiXSxbMCwxXSxbMCwyXSxbMiwxXV0=&embed" width="432" height="204" style="border-radius: 8px; border: none;"></iframe>
</p>

Just as mama used to say: Hoppe hoppe Reiter, wenn er fällt, dann schreit er.

<p align="center">
<img src="/assets/horse.gif" alt="Reiter">
</p>