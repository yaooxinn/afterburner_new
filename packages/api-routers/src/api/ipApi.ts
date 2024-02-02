// TODO: サンプルコードのため、不要になったら削除する

import { IpApiResponse } from "@/types/ipApi";
import axios from "axios";
import { Request, Response, Router } from "express";

const router = Router();

const baseUrl = "http://ip-api.com/";

/**
 * IP Geolocation - JSON endpoint
 *
 * @see https://ip-api.com/docs/api:json
 */
router.get("/json/:query?", async (req: Request, res: Response) => {
  const { query } = req.params;
  const { fields, lang, callback } = req.query;

  try {
    const queryParam = query ? `${query}` : "";
    const url = `${baseUrl}/json/${queryParam}`;
    const params = {
      params: {
        fields,
        lang,
        callback,
      },
    };

    const response = await axios.get<IpApiResponse.Json>(url, params);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error getting IP info");
  }
});

export default router;
