import Ad from "../models/Ad.js";

export const createAd = async (req, res) => {
  try {
    const { businessName, email, duration, description } = req.body;
    let bannerPath = "";

    
    if (req.files && req.files.banner) {
      const banner = req.files.banner;
      bannerPath = `/uploads/${Date.now()}_${banner.name}`;
      banner.mv(`./uploads/${Date.now()}_${banner.name}`);
    }

    const newAd = new Ad({
      businessName,
      email,
      duration,
      description,
      banner: bannerPath
    });

    await newAd.save();
    res.status(201).json({ success: true, message: "Iyamamaza yakiriwe neza!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getAds = async (req, res) => {
  try {
    const ads = await Ad.find({ status: "active" });
    res.status(200).json(ads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};