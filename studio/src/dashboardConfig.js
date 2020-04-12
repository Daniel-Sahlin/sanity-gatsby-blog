export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e939bba973e3c0ed4a9feb6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-xvc148o1',
                  apiId: 'fd53364a-7cc9-4bfb-8fbf-e2cdcc09af17'
                },
                {
                  buildHookId: '5e939bba29b6afcb41304901',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-c9fheruk',
                  apiId: '2f735cbf-ce69-448d-8b73-bc04fe33ab28'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Daniel-Sahlin/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-c9fheruk.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
