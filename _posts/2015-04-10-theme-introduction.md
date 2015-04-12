---
layout: post
category : tutorial
tagline: "Using jekyll-materiallize"
tags : [jekyll, tutorial]
shortContent: "Jekyll is a parsing engine bundled as a ruby gem used to build static websites from
dynamic components such as templates, partials, liquid code, markdown, etc. Jekyll is known as \"a simple, blog aware, static site generator\""
---
{% include JB/setup %}

#### Overview

##### What is Jekyll?

Jekyll is a parsing engine bundled as a ruby gem used to build static websites from
dynamic components such as templates, partials, liquid code, markdown, etc. Jekyll is known as "a simple, blog aware, static site generator".

For more information, please read [Jekyll](http://jekyllrb.com/)

##### What is Jekyll-Bootstrap?

The quickest way to start and publish your Jekyll powered blog. 100% compatible with GitHub pages.

For more information, please read [Jekyll-Bootstrap](http://jekyllbootstrap.com/)

##### What is Jekyll-materiallize?

A material flavor blog based on Jekyll-Bootstrap.


##### How to use jekyll-materiallize?

* Visit [Github](https://github.com/) and create an empty repo in specified format like `<USERNAME>.github.io`
* Execute following commands

```bash
cd <workspace>
git clone https://github.com/leftstick/jekyll-materiallize <USERNAME>.github.io
cd <USERNAME>.github.com
git remote set-url origin git@github.com:<USERNAME>/<USERNAME>.github.io.git
git push -u origin master  
```

* Modify attributes in `_config.yml` such as `title` , `tagline` , `lang` , `footerDetail` , `author` , `production_url` , `comments` , `analytics`
* Feel free to register issue while you are encountering problems

##### Description

`lang` Which language you preferred to display in your blog, two languages are available, ___zh___, ___en___. You can easily extend any language you like in `assets/lang/lang.js`
`footerDetail` Whether to display the detail part of the footer
