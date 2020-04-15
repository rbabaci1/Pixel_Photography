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

export const filterImages = (images, searchTerm) => {
  const filteredImages = images.filter((image) =>
    image.tags.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return filteredImages;
};
