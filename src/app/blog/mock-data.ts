// Mock data for blog posts when Contentful is not available
import { BlogPostCollection, BlogPostEntry } from '@/lib/contentfulApi';

// Create a mock blog post entry
const createMockBlogPost = (id: string, title: string, slug: string, excerpt: string): BlogPostEntry => {
  return {
    sys: {
      id,
      type: 'Entry',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      locale: 'el',
      contentType: {
        sys: {
          id: 'pageBlogPost',
          type: 'Link',
          linkType: 'ContentType'
        }
      }
    },
    fields: {
      title,
      slug,
      excerpt,
      subtitle: excerpt,
      content: {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'paragraph',
            data: {},
            content: [
              {
                nodeType: 'text',
                value: 'This is mock content for demonstration purposes.',
                marks: [],
                data: {}
              }
            ]
          }
        ]
      },
      publishedDate: new Date().toISOString(),
      author: {
        sys: {
          id: 'author-1',
          type: 'Entry',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          locale: 'el',
          contentType: {
            sys: {
              id: 'author',
              type: 'Link',
              linkType: 'ContentType'
            }
          }
        },
        fields: {
          name: 'Pavlos Alektoridis',
          picture: {
            sys: {
              id: 'author-picture-1',
              type: 'Asset',
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              locale: 'el'
            },
            fields: {
              title: 'Author Profile Picture',
              file: {
                url: '//images.ctfassets.net/sample/author-profile.jpg',
                details: {
                  size: 12345,
                  image: {
                    width: 200,
                    height: 200
                  }
                },
                fileName: 'author-profile.jpg',
                contentType: 'image/jpeg'
              }
            }
          }
        }
      }
    },
    metadata: {
      tags: []
    }
  } as unknown as BlogPostEntry;
};

// Create mock blog posts
export const mockBlogPosts: BlogPostEntry[] = [
  createMockBlogPost(
    '1',
    'Πώς να βελτιώσετε την κατάταξη του ιατρικού σας ιστότοπου στη Google',
    'pos-na-veltiosete-tin-katataksi-tou-iatrikou-sas-istotopou-sti-google',
    'Μάθετε τις καλύτερες πρακτικές SEO για ιατρικούς ιστότοπους και πώς να βελτιώσετε την κατάταξή σας στις μηχανές αναζήτησης.'
  ),
  createMockBlogPost(
    '2',
    'Τα οφέλη των Google Ads για ιατρούς και κλινικές',
    'ta-ofeli-ton-google-ads-gia-iatrous-kai-klinikes',
    'Ανακαλύψτε πώς οι διαφημίσεις Google μπορούν να αυξήσουν την προβολή του ιατρείου σας και να προσελκύσουν νέους ασθενείς.'
  ),
  createMockBlogPost(
    '3',
    'Πώς να δημιουργήσετε περιεχόμενο που μετατρέπει επισκέπτες σε ασθενείς',
    'pos-na-dimiourgisete-periexomeno-pou-metatrepei-episkeptes-se-astheneis',
    'Συμβουλές για τη δημιουργία ελκυστικού και χρήσιμου περιεχομένου που θα μετατρέψει τους επισκέπτες του ιστότοπού σας σε ασθενείς.'
  ),
  createMockBlogPost(
    '4',
    'Η σημασία του mobile-friendly σχεδιασμού για ιατρικούς ιστότοπους',
    'i-simasia-tou-mobile-friendly-sxediasmou-gia-iatrikous-istotopous',
    'Γιατί είναι απαραίτητο ο ιατρικός σας ιστότοπος να είναι προσαρμοσμένος για κινητές συσκευές και πώς αυτό επηρεάζει την κατάταξή σας στη Google.'
  ),
  createMockBlogPost(
    '5',
    'Πώς να αξιοποιήσετε τα social media για την προώθηση του ιατρείου σας',
    'pos-na-aksiopoiisete-ta-social-media-gia-tin-proothisi-tou-iatreiou-sas',
    'Στρατηγικές για την αποτελεσματική χρήση των μέσων κοινωνικής δικτύωσης για την προώθηση του ιατρείου σας και την προσέλκυση νέων ασθενών.'
  )
];

// Create a mock blog post collection
export const mockBlogPostCollection: BlogPostCollection = {
  total: mockBlogPosts.length,
  skip: 0,
  limit: 100,
  items: mockBlogPosts,
  includes: {}
} as BlogPostCollection;

// Function to get a mock blog post by slug
export function getMockBlogPostBySlug(slug: string): BlogPostEntry | null {
  return mockBlogPosts.find(post => post.fields.slug === slug) || null;
}

export default mockBlogPostCollection;
