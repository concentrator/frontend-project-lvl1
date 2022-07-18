# Brain Games

## Project state

### Hexlet tests and linter status:
[![Actions Status](https://github.com/concentrator/frontend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/concentrator/frontend-project-lvl1/actions)

### Maintainability

[![Maintainability](https://api.codeclimate.com/v1/badges/d1e5a3e3d6c62d79b865/maintainability)](https://codeclimate.com/github/concentrator/frontend-project-lvl1/maintainability)

## Project description

First training project on the Hexlet Frontend Developer program. It contains a set of mathematical games running in a command line interface (CLI).

## Requirements

To install and run this project locally __nodejs__ is required.

## Setup

### Install package

```bash
make install
```

### Create a symlinks in the global node_modules and bin dirs to project dir (optional)

```bash
sudo npm link
```

## Run tests

```bash
make lint
```

## Run game (symlinks created)

```bash
brain-<game-name>
```

## Run game (no symlinks)

```bash
make brain-<game-name>
```

## Games list

- brain-even
- brain-calc
- brain-gcd
- brain-progression
- brain-prime

[Install and play the Brain Even game](https://asciinema.org/a/NG2noTZrgbzlEit3aYBOK10wm)

[Play the Brain Calc game](https://asciinema.org/a/oBwCkcfErsdl3UYEUg4cUndkm)

[Play the Brain GCD game](https://asciinema.org/a/qZ0JR2QKlhScLWay53aZ9Eg7t)

[Play the Brain Progression game](https://asciinema.org/a/WTszBbfJGIVYCGiMVIOWbYAkd)

[Play the Brain Prime game](https://asciinema.org/a/zLkgxVWmb7O1HHiuwYuwOUnrf)
