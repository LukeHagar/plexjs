# GetGeoDataGeoData

Geo location data

## Example Usage

```typescript
import { GetGeoDataGeoData } from "@lukehagar/plexjs/sdk/models/operations";

let value: GetGeoDataGeoData = {
    code: "VI",
    continentCode: "NA",
    country: "United States Virgin Islands",
    city: "Amsterdam",
    europeanUnionMember: true,
    timeZone: "America/St_Thomas",
    postalCode: 802,
    inPrivacyRestrictedCountry: true,
    inPrivacyRestrictedRegion: true,
    subdivisions: "Saint Thomas",
    coordinates: "18.3381, -64.8941",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `code`                                                              | *string*                                                            | :heavy_check_mark:                                                  | The ISO 3166-1 alpha-2 code of the country.                         | VI                                                                  |
| `continentCode`                                                     | *string*                                                            | :heavy_check_mark:                                                  | The continent code where the country is located.                    | NA                                                                  |
| `country`                                                           | *string*                                                            | :heavy_check_mark:                                                  | The official name of the country.                                   | United States Virgin Islands                                        |
| `city`                                                              | *string*                                                            | :heavy_check_mark:                                                  | The name of the city.                                               | Amsterdam                                                           |
| `europeanUnionMember`                                               | *boolean*                                                           | :heavy_minus_sign:                                                  | Indicates if the country is a member of the European Union.         | true                                                                |
| `timeZone`                                                          | *string*                                                            | :heavy_check_mark:                                                  | The time zone of the country.                                       | America/St_Thomas                                                   |
| `postalCode`                                                        | *number*                                                            | :heavy_check_mark:                                                  | The postal code of the location.                                    | 802                                                                 |
| `inPrivacyRestrictedCountry`                                        | *boolean*                                                           | :heavy_minus_sign:                                                  | Indicates if the country has privacy restrictions.                  | true                                                                |
| `inPrivacyRestrictedRegion`                                         | *boolean*                                                           | :heavy_minus_sign:                                                  | Indicates if the region has privacy restrictions.                   | true                                                                |
| `subdivisions`                                                      | *string*                                                            | :heavy_check_mark:                                                  | The name of the primary administrative subdivision.                 | Saint Thomas                                                        |
| `coordinates`                                                       | *string*                                                            | :heavy_check_mark:                                                  | The geographical coordinates (latitude, longitude) of the location. | 18.3381, -64.8941                                                   |