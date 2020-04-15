export const cleanData = (images) =>
  images.map((image) => {
    return {
      id: image.id,
      largeImageURL: image.largeImageURL,
      likes: image.likes,
      views: image.views,
      downloads: image.downloads,
      tags: image.tags.split(',').join(''),
    };
  });
