# Atom Config

To sync packages, before committing any changes, run command:

```sh
$ apm list --installed --bare > ~/.atom/package.list
```

After updating, to ensure packages are installed according to `package.list` run command:

```sh
$ apm install --packages-file ~/.atom/package.list
```

See: https://stackoverflow.com/questions/30006827/how-to-save-atom-editor-config-and-list-of-packages-installed
