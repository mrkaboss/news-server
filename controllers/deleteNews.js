export const deleteNews = async (req, res) => {
  try {
    const news = await news.findById(req.params.id);

    if (!news) {
      return handleError(res, 404, "News not found");
    }
    if (
      news.author?.toString() !== req.user?._id.toString() &&
      req.user?.role !== "admin"
    ) {
      return handleError(res, 403, "Not allowed");
    }

    await news.deleteOne();

    return handleSuccess(res, 200, "News deleted successfully");
  } catch (error) {
    return handleError(res, 500, error.message);
  }
};