# Matthew Faw's Homepage

## Local development

To deploy locally, navigate to the base folder and run the following command:
```
JEKYLL_ENV=dev bundle exec jekyll s --host=0.0.0.0
```
Then, you can view the locally deployed webpage at `http://localhost:4000/`.

## Deploying on GitHub Pages

In the `.github/workflows` folder, there is a file `jekyll-gh-pages.yml`. This
sets up the GitHub Action which redeploys the website every time I push new
code to the `master` branch.
