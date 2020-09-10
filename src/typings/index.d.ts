declare module '*.css' {
  const styles: {
    [key: string]: string;
  };

  export default styles;
}

declare module '*.png' {
  const path: string;
  export default path;
}

declare module '*.jpg' {
  const path: string;
  export default path;
}

declare module '*.html' {
  const content: string;
  export default content;
}
