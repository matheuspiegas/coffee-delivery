export type defaultTheme = typeof defaultTheme

export const defaultTheme = {
  colors: {
    product: {
      'yellow-dark': '#C47F17',
      'yellow': '#DBAC2C',
      'yellow-light': '#F1E9C9',

      'purple-dark': '#4B2995',
      'purple': '#8047F8',
      'purple-light': '#EBE5F9',
    },
    base: {
      'base-title': '#272221',
      'base-subtitle': '#403937',
      'base-text': '#574F4D',
      'base-label': '#8D8686',
      'base-hover': '#D7D5D5',
      'base-button': '#E6E5E5',
      'base-input': '#EDEDED',
      'base-card': '#F3F2F2',
      'background': '#FAFAFA',
      'white': '#FFFFFF',
    }
  },
  typography: {
    baloo2: {
      'font-family': '"Baloo 2", sans-serif',
      titles: {
        xl: {
          size: '3rem',
          'line-height': '1.3',
          weight: '800'
        },
        l: {
          size: '2rem',
          'line-height': '1.3',
          weight: '800'
        },
        m: {
          size: '1.5rem',
          'line-height': '1.3',
          weight: '800'
        },
        s: {
          size: '1.25rem',
          'line-height': '1.3',
          weight: '700'
        },
        xs: {
          size: '1.125rem',
          'line-height': '1.3',
          weight: '700'
        },
      }
    },
    roboto: {
      'font-family': '"Roboto", sans-serif',
      texts: {
        l: {
          size: '1.25rem',       // 20px
          'line-height': '1.3',
          weight: '400'          // Regular
        },
        m: {
          size: '1rem',          // 16px
          'line-height': '1.3',
          weight: '400'          // Regular
        },
        s: {
          size: '0.875rem',      // 14px
          'line-height': '1.3',
          weight: '400'          // Regular
        },
        xs: {
          size: '0.75rem',       // 12px
          'line-height': '1.3',
          weight: '700'          // Bold
        },
      },
      tags: {
        tag: {
          size: '0.625rem',      // 10px
          'line-height': '1.3',
          weight: '700'          // Bold
        }
      },
      buttons: {
        g: {
          size: '0.875rem',      // 14px
          'line-height': '1.6',
          weight: '700'          // Bold
        },
        m: {
          size: '0.75rem',       // 12px
          'line-height': '1.6',
          weight: '400'          // Regular
        }
      }
    }

  }
}