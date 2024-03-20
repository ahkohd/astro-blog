---
title: 'Fix "warning: object file (xyz) was built for newer macOS version (x.y) that being linked (y.z)'
description: ""
pubDate: "Dec 04 2022"
heroImage: "/blog-placeholder-3.jpg"
---

The other day I was working on a [macOS](https://usezap.sh) app built with Tauri and Rust. I encountered a build error; `"warning: object file (XYZ) was built for newer macOS version (x.y) that being linked (y.z)"` when building for the `apple-x86_64` target.

> TLDR; You are using the wrong Apple Clang compiler for your target.

Oops! this used to work. What happened? I backtracked the changes I had made on my M1 mac setup, and then I realised that this issue started showing up when I upgraded my Xcode from version 13 to 14. You may also encounter this issue if you upgrade your macOS — for example, an upgrade from version 12 (Monterey) to 13 (Ventura).

It turns out that the object files built by the Apple Clang compiler shipped with Xcode (X, in this case, 14) command line tools are not linkable on older macOS versions (in this case, 10.3). It now makes sense; I’m using an Apple Clang compiler built for Apple silicon to create object files to be linked on Intel-based macs.

The solution is straightforward: use a version of Apple’s Clang compiler that builds linkable object files for intel-based macs. So, therefore, I need to download a new Xcode version that ships with the correct Apple Clang compiler required to target _apple-x86_64_.

### How to fix

- Head over [to download the correct Xcode](https://developer.apple.com/download/all/) (I figured out Xcode 13.x ships with the right Apple Clang compiler to build for the _apple-x86_64_ target)

- Rename it to `Xcode.Version.app` (In my case, `Xcode.13.app`), so it won’t conflict with the already installed Xcode.

- Move it to your `~/Applications` directory.

- Open your terminal, and change the current directory to your home.

```bash
cd ~
```

- Run the following command to set the path for the active developer directory.

```bash
  # Confirm if the Xcode path is correct, I'm using Xcode.13.app
  sudo xcode-select -s /Applications/Xcode.13.app
```

- Try rebuilding your code; the build error should be gone.
