---
title: "NixOS Contributions"
date: 2022-02-24T22:23:51+03:00
draft: false
---

I started using [NixOS][nixos] as my primary operating system in late 2021. As I
was migrating my dotfiles for NixOS, some packages I wanted to use were missing
from the NixOS package collection, [Nixpkgs][nixpkgs]. Therefore, I contributed
the following package definitions to Nixpkgs:

+ [`d0c-s4vage/lookatme`][lookatme]: An interactive, terminal-based markdown
presenter.\
[View Pull Request][lookatme-pull-request]
+ [`sindrets/winshift.nvim`][winshift]: Rearrange Neovim windows with ease.\
[View Pull Request][winshift-pull-request]
+ [`skywind3000/asyncrun.vim`][asyncrun]: Run async tasks in Vim/NeoVim and
output to quickfix list.\
[View Pull Request][asyncrun-pull-request]
+ [`skywind3000/asynctasks.vim`][asynctasks]: Modern task system for project
building, testing and deploying in Vim/Neovim.\
[View Pull Request][asynctasks-pull-request]
+ [`quangnguyen30192/cmp-nvim-ultisnips`][cmp-nvim-ultisnips]: [nvim-cmp] source
for [ultisnips].\
[View Pull Request][cmp-nvim-ultisnips-pull-request]
+ [`fhill2/telescope-ultisnips.nvim`][telescope-ultisnips-nvim]: Integration of
[telescope] and [ultisnips].\
[View Pull Request][telescope-ultisnips-nvim-pull-request]
+ [`GustavoKatel/telescope-asynctasks.nvim`][telescope-asynctasks-nvim]: Integration
of [telescope] and [asynctasks].\
[View Pull Request][telescope-asynctasks-nvim-pull-request]
+ [`AmeerTaweel/todo.nvim`][todo-nvim]: Highlight, list and search TODO comments
in Neovim projects.\
[View Pull Request][todo-nvim-pull-request]

[nixos]: https://nixos.org/
[nixpkgs]: https://github.com/NixOS/nixpkgs/
[lookatme]: https://github.com/d0c-s4vage/lookatme
[lookatme-pull-request]: https://github.com/NixOS/nixpkgs/pull/158323
[winshift]: https://github.com/sindrets/winshift.nvim
[winshift-pull-request]: https://github.com/NixOS/nixpkgs/pull/160357
[asyncrun]: https://github.com/skywind3000/asyncrun.vim
[asyncrun-pull-request]: https://github.com/NixOS/nixpkgs/pull/160443
[asynctasks]: https://github.com/skywind3000/asynctasks.vim
[asynctasks-pull-request]: https://github.com/NixOS/nixpkgs/pull/160478
[cmp-nvim-ultisnips]: https://github.com/quangnguyen30192/cmp-nvim-ultisnips
[cmp-nvim-ultisnips-pull-request]: https://github.com/NixOS/nixpkgs/pull/160501
[telescope-ultisnips-nvim]: https://github.com/fhill2/telescope-ultisnips.nvim
[telescope-ultisnips-nvim-pull-request]: https://github.com/NixOS/nixpkgs/pull/160502
[telescope-asynctasks-nvim]: https://github.com/GustavoKatel/telescope-asynctasks.nvim
[telescope-asynctasks-nvim-pull-request]: https://github.com/NixOS/nixpkgs/pull/160503
[todo-nvim]: https://github.com/AmeerTaweel/todo.nvim
[todo-nvim-pull-request]: https://github.com/NixOS/nixpkgs/pull/160932
[nvim-cmp]: https://github.com/hrsh7th/nvim-cmp
[ultisnips]: https://github.com/sirver/UltiSnips
[telescope]: https://github.com/nvim-telescope/telescope.nvim
