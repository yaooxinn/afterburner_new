// TODO: サンプルコードのため、不要になったら削除する

export namespace IpApiResponse {
  /**
   * Interface for the JSON response from the IP API
   */
  export interface Json {
    /**
     * Status of the request, can be either "success" or "fail"
     */
    status: string;

    /**
     * Included only when status is fail. Can be one of the following: private range, reserved range, invalid query
     */
    message?: string;

    /**
     * Continent name
     */
    continent?: string;

    /**
     * Two-letter continent code
     */
    continentCode?: string;

    /**
     * Country name
     */
    country?: string;

    /**
     * Two-letter country code ISO 3166-1 alpha-2
     */
    countryCode?: string;

    /**
     * Region/state short code (FIPS or ISO)
     */
    region?: string;

    /**
     * Region/state name
     */
    regionName?: string;

    /**
     * City name
     */
    city?: string;

    /**
     * District (subdivision of city)
     */
    district?: string;

    /**
     * Zip code
     */
    zip?: string;

    /**
     * Latitude
     */
    lat?: number;

    /**
     * Longitude
     */
    lon?: number;

    /**
     * Timezone (tz)
     */
    timezone?: string;

    /**
     * Timezone UTC DST offset in seconds
     */
    offset?: number;

    /**
     * National currency
     */
    currency?: string;

    /**
     * ISP name
     */
    isp?: string;

    /**
     * Organization name
     */
    org?: string;

    /**
     * AS number and organization, separated by space (RIR). Empty for IP blocks not being announced in BGP tables.
     */
    as?: string;

    /**
     * AS name (RIR). Empty for IP blocks not being announced in BGP tables.
     */
    asname?: string;

    /**
     * Reverse DNS of the IP (can delay response)
     */
    reverse?: string;

    /**
     * Mobile (cellular) connection
     */
    mobile?: boolean;

    /**
     * Proxy, VPN or Tor exit address
     */
    proxy?: boolean;

    /**
     * Hosting, colocated or data center
     */
    hosting?: boolean;

    /**
     * IP used for the query
     */
    query: string;
  }
}
