$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/resources/lowestPrice.feature");
formatter.feature({
  "line": 1,
  "name": "Lowest Price",
  "description": "",
  "id": "lowest-price",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Getting the lowest price for the flights",
  "description": "",
  "id": "lowest-price;getting-the-lowest-price-for-the-flights",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@LowestPrice"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "\"application\" launched in \"chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "search flights by source and destination for the day",
  "rows": [
    {
      "cells": [
        "src",
        "dest",
        "day"
      ],
      "line": 6
    },
    {
      "cells": [
        "\u003csrc\u003e",
        "\u003cdest\u003e",
        "\u003cday\u003e"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "display the lowest price",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "lowest-price;getting-the-lowest-price-for-the-flights;",
  "rows": [
    {
      "cells": [
        "src",
        "dest",
        "day"
      ],
      "line": 10,
      "id": "lowest-price;getting-the-lowest-price-for-the-flights;;1"
    },
    {
      "cells": [
        "DXB",
        "LHR",
        "23"
      ],
      "line": 11,
      "id": "lowest-price;getting-the-lowest-price-for-the-flights;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Getting the lowest price for the flights",
  "description": "",
  "id": "lowest-price;getting-the-lowest-price-for-the-flights;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@LowestPrice"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "\"application\" launched in \"chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "search flights by source and destination for the day",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "rows": [
    {
      "cells": [
        "src",
        "dest",
        "day"
      ],
      "line": 6
    },
    {
      "cells": [
        "DXB",
        "LHR",
        "23"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "display the lowest price",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "application",
      "offset": 1
    },
    {
      "val": "chrome",
      "offset": 27
    }
  ],
  "location": "pageStepDef.launched_in(String,String)"
});
formatter.result({
  "duration": 10699990019,
  "status": "passed"
});
formatter.match({
  "location": "pageStepDef.search_flights_by_source_and_destination_for_the_day(Dataset\u003e)"
});
formatter.result({
  "duration": 7021283674,
  "status": "passed"
});
formatter.match({
  "location": "pageStepDef.display_the_lowest_price()"
});
formatter.result({
  "duration": 12656945242,
  "status": "passed"
});
});