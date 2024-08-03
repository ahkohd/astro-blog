---
title: "Build a Mac spotlight app with Tauri"
pubDate: "August 03 2024"
---

"[Tauri](https://tauri.app) is a toolkit that helps developers make applications for the major desktop platforms - using virtually any frontend framework in existence. The core is built with Rust, and the CLI leverages Node.js making Tauri a genuinely polyglot approach to creating and maintaining great apps." - lifted from [here.](https://tauri.app/about/intro)

A typical spotlight window is a _non-activating panel_ that can display over other windows, including full-screen ones, usually activated using a hotkey.

Why use a non-activating panel? _A spotlight window does not steal focus from the frontmost window._ To ensure this behavior, you will need a [non-activating panel.](https://developer.apple.com/documentation/appkit/nswindowstylemask/nswindowstylemasknonactivatingpanel?language=objc) This means the panel cannot activate the owning app. [A panel is a special kind of window, typically serving an auxiliary function in an application.](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/WinPanel/Concepts/UsingPanels.html#//apple_ref/doc/uid/20000224)

The Tauri window builder creates standard Mac window by default. To create a panel window, you can use the [tauri-nspanel](https://github.com/ahkohd/tauri-nspanel) plugin, which I developed. It helps convert a window into a panel and extends Tauri with the necessary APIs for working with panels. [Under the hood](https://github.com/ahkohd/tauri-nspanel/blob/v2/src/raw_nspanel.rs#L183C13-L183C28), it works by [swizzling (the dynamic exchange of method implementations at runtime which allows you to modify the behavior of a class or an instance of a class without having to create a subclass)](https://spin.atomicobject.com/method-swizzling-objective-c/) the [standard window](https://developer.apple.com/documentation/appkit/nswindow) to the [panel class](https://developer.apple.com/documentation/appkit/nspanel) at runtime.
