/** Official sites for technologies shown in the skill grid. */
export const techLinks: Record<string, string> = {
  TypeScript: 'https://www.typescriptlang.org/',
  JavaScript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  Python: 'https://www.python.org/',
  Java: 'https://dev.java/',
  'C++': 'https://isocpp.org/',
  PHP: 'https://www.php.net/',
  MySQL: 'https://www.mysql.com/',
  Firebase: 'https://firebase.google.com/',
  MongoDB: 'https://www.mongodb.com/',
  React: 'https://react.dev/',
  'Node.js': 'https://nodejs.org/',
  TailwindCSS: 'https://tailwindcss.com/',
  'Visual Studio Code': 'https://code.visualstudio.com/',
  Cursor: 'https://cursor.com/',
  Git: 'https://git-scm.com/',
}

export function getTechUrl(name: string): string | undefined {
  return techLinks[name]
}
