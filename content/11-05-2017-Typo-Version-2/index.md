---
path: '/typo-version-2'
date: '2017-11-05T20:29:10.950Z'
title: 'Typo, an experiment in font viewing'
image: 'http://res.cloudinary.com/dnqsgeyp7/image/upload/c_scale,q_90,w_2893/v1518389760/typo.png'
---

Typo is a lightweight, portable font viewer built with <b>Electron</b>,<b>React</b> and <b>Redux</b>

I've been tinkering with this project for some time but since recently I decided to put some more time and effort behind it, in an effort to create better tools for viewing and possibly in the future editing fonts.

<img src="https://i.imgur.com/4Tso6Xk.gif" style="max-width: 100%; max-height:100%" >
<p style="font-size:11px">Typo in action</p>

### Background

Inspiration for Typo came from a web app that used OpenType.js to load fonts to the browser, [Character Map](https://bluejamesbond.github.io/CharacterMap/). Initial versions of Typo were based heavily on this, so credits to [bluejamesbond](https://github.com/bluejamesbond) for amazing work.

<img src="https://i.imgur.com/SXdA77Q.png" style="max-width: 100%; max-height:100%">
<p style="font-size:11px">Original Character Map: <a href="https://bluejamesbond.github.io/CharacterMap/">https://bluejamesbond.github.io/CharacterMap/</a></p>

### Changes

The initial version of Typo used and relied solely on React for state and structure, I soon quickly ran into state related errors and hacky work arounds that affected performance, thus verison 2 of Typo has re-written with Redux.

Developing with redux has been a really fun experience, once I learnt to "think" in Redux features were easier to implement and maintain and just generally move around with breaking the overall project.

### Challenges

One of the most difficult challenges I faced while developing Typo was adapting the Redux's model and the various add-ons/functions that existed within the ecosystem of Redux (react-redux, connect(), mapStateToProps, MapDispatchToProps).

Aside from this initial learning curve, once I _finally_ understood them, it was like developing with a jetpack strapped to my back.

Typo is now available for download (via [github](https://github.com/Pr0x1m4/typo)), I'll make a website(eventually lol).

<img src='http://res.cloudinary.com/dnqsgeyp7/image/upload/c_scale,q_90,w_2893/v1518389760/typo.png' />
