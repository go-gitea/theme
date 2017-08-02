# Gitea: Theme

[![Build Status](http://drone.gitea.io/api/badges/go-gitea/theme/status.svg)](http://drone.gitea.io/go-gitea/theme)
[![Join the chat at https://img.shields.io/discord/322538954119184384.svg](https://img.shields.io/discord/322538954119184384.svg)](https://discord.gg/NsatcWJ)

This is a Hugo theme that gets used within all of our websites like our blog,
documentation and also the redirects. If you commit any changes to the `master`
branch it will trigger rebuilds of all the related websites.

## Install

You need an existing [Hugo](https://github.com/spf13/hugo) website, than you can
just download our prebuilt [theme](https://dl.gitea.io/theme/master.tar.gz), put
it into your `themes/gitea` folder and enable the theme with the
`theme = "gitea"` option of your website.

## Development

We choose [yarn](https://yarnpkg.com) to fetch our dependencies and
[gulp](http://gulpjs.com/) for the pipeline. We won't cover the installation of
nodejs or yarn, for that you can find enough guides depending on your operating
system. First of all you have to install the required dependencies:

```
yarn install -q
```

After you have successfully installed the required dependencies you should be
able to use these commands to just clean and build generated sources of the
theme:

```
yarn run clean
yarn run build
yarn run release
```

If you want to do more development on the theme we suggest to use the `watch`
task we have defined to get the changes directly built after saving changes to
a file:

```
yarn run watch
```

When you are done with your changes just create a pull request, after merging
the pull request the theme will be published to our [download page](https://dl.gitea.io/theme) automatically.

## Contributing

Fork -> Patch -> Push -> Pull Request

## Authors

* [Maintainers](https://github.com/orgs/go-gitea/people)
* [Contributors](https://github.com/go-gitea/theme/graphs/contributors)

## License

This project is under the Apache-2.0 License. See the [LICENSE](LICENSE) file
for the full license text.

## Copyright

```
Copyright (c) 2016 The Gitea Authors <https://gitea.io>
```
