export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff1a20f39a300f35c762ce9',
                  title: 'Sanity Studio',
                  name: 'photo-portfolio-studio',
                  apiId: '66d53d01-52a9-4730-9c1d-efe9b9e41aea'
                },
                {
                  buildHookId: '5ff1a20fdc5eb2ced02fd1a5',
                  title: 'Portfolio Website',
                  name: 'photo-portfolio-web',
                  apiId: '820ab323-80c0-487f-b24d-854a3c75a263'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MarinaGoto/photo-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://photo-portfolio-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
