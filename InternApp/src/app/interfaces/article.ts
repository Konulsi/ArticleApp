export interface Articles {
  articles: article[];
  articlesCount: number;
}

export interface article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
}

export interface articleDto {
  article: {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: {
      username: string;
      bio: string;
      image: string;
      following: boolean;
    };
  };
}

export interface NewArticle {
  article: {
    body: string;
    description: string;
    tag: string;
    title: string;
  };
}

export interface NewArticleResponse {
  article: {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: {
      username: string;
      bio: string;
      image: string;
      following: boolean;
    };
  };
}

export interface ArticleDto {
  article: {
    body: string;
    description: string;
    tag: string;
    title: string;
  };
}

export interface ArticleEditDto {
  article: {
    body: string;
    description: string;
    tag: string;
    title: string;
  };
}
