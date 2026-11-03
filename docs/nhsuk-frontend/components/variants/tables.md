# Tables variants

> Generated from [NHS Frontend](https://github.com/nhsuk/nhsuk-frontend), © NHS England, MIT licence. Do not edit by hand. Parameters and main examples are in [tables.md](../tables.md).

## default

### compact

```njk
{{ table({
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        text: "Blisters on lips or around the mouth"
      },
      {
        text: "Cold sores"
      }
    ],
    [
      {
        text: "Itchy, dry, cracked, sore"
      },
      {
        text: "Eczema"
      }
    ],
    [
      {
        text: "Itchy blisters"
      },
      {
        text: "Shingles, chickenpox"
      }
    ]
  ],
  compact: true
}) }}
```

### striped

```njk
{{ table({
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        text: "Blisters on lips or around the mouth"
      },
      {
        text: "Cold sores"
      }
    ],
    [
      {
        text: "Itchy, dry, cracked, sore"
      },
      {
        text: "Eczema"
      }
    ],
    [
      {
        text: "Itchy blisters"
      },
      {
        text: "Shingles, chickenpox"
      }
    ]
  ],
  striped: true
}) }}
```

### striped compact

```njk
{{ table({
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        text: "Blisters on lips or around the mouth"
      },
      {
        text: "Cold sores"
      }
    ],
    [
      {
        text: "Itchy, dry, cracked, sore"
      },
      {
        text: "Eczema"
      }
    ],
    [
      {
        text: "Itchy blisters"
      },
      {
        text: "Shingles, chickenpox"
      }
    ]
  ],
  compact: true,
  striped: true
}) }}
```

### responsive

```njk
{{ table({
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        text: "Blisters on lips or around the mouth"
      },
      {
        text: "Cold sores"
      }
    ],
    [
      {
        text: "Itchy, dry, cracked, sore"
      },
      {
        text: "Eczema"
      }
    ],
    [
      {
        text: "Itchy blisters"
      },
      {
        text: "Shingles, chickenpox"
      }
    ]
  ],
  responsive: true
}) }}
```

### responsive compact

```njk
{{ table({
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        text: "Blisters on lips or around the mouth"
      },
      {
        text: "Cold sores"
      }
    ],
    [
      {
        text: "Itchy, dry, cracked, sore"
      },
      {
        text: "Eczema"
      }
    ],
    [
      {
        text: "Itchy blisters"
      },
      {
        text: "Shingles, chickenpox"
      }
    ]
  ],
  compact: true,
  responsive: true
}) }}
```

### responsive striped

```njk
{{ table({
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        text: "Blisters on lips or around the mouth"
      },
      {
        text: "Cold sores"
      }
    ],
    [
      {
        text: "Itchy, dry, cracked, sore"
      },
      {
        text: "Eczema"
      }
    ],
    [
      {
        text: "Itchy blisters"
      },
      {
        text: "Shingles, chickenpox"
      }
    ]
  ],
  responsive: true,
  striped: true
}) }}
```

### responsive striped compact

```njk
{{ table({
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        text: "Blisters on lips or around the mouth"
      },
      {
        text: "Cold sores"
      }
    ],
    [
      {
        text: "Itchy, dry, cracked, sore"
      },
      {
        text: "Eczema"
      }
    ],
    [
      {
        text: "Itchy blisters"
      },
      {
        text: "Shingles, chickenpox"
      }
    ]
  ],
  compact: true,
  responsive: true,
  striped: true
}) }}
```

### reverse

```njk
{{ table({
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        text: "Blisters on lips or around the mouth"
      },
      {
        text: "Cold sores"
      }
    ],
    [
      {
        text: "Itchy, dry, cracked, sore"
      },
      {
        text: "Eczema"
      }
    ],
    [
      {
        text: "Itchy blisters"
      },
      {
        text: "Shingles, chickenpox"
      }
    ]
  ],
  variant: "reverse"
}) }}
```

### reverse compact

```njk
{{ table({
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        text: "Blisters on lips or around the mouth"
      },
      {
        text: "Cold sores"
      }
    ],
    [
      {
        text: "Itchy, dry, cracked, sore"
      },
      {
        text: "Eczema"
      }
    ],
    [
      {
        text: "Itchy blisters"
      },
      {
        text: "Shingles, chickenpox"
      }
    ]
  ],
  compact: true,
  variant: "reverse"
}) }}
```

### reverse striped

```njk
{{ table({
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        text: "Blisters on lips or around the mouth"
      },
      {
        text: "Cold sores"
      }
    ],
    [
      {
        text: "Itchy, dry, cracked, sore"
      },
      {
        text: "Eczema"
      }
    ],
    [
      {
        text: "Itchy blisters"
      },
      {
        text: "Shingles, chickenpox"
      }
    ]
  ],
  striped: true,
  variant: "reverse"
}) }}
```

### reverse striped compact

```njk
{{ table({
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        text: "Blisters on lips or around the mouth"
      },
      {
        text: "Cold sores"
      }
    ],
    [
      {
        text: "Itchy, dry, cracked, sore"
      },
      {
        text: "Eczema"
      }
    ],
    [
      {
        text: "Itchy blisters"
      },
      {
        text: "Shingles, chickenpox"
      }
    ]
  ],
  compact: true,
  striped: true,
  variant: "reverse"
}) }}
```

## scrolling

### striped

```njk
{{ table({
  caption: {
    id: "scrolling-caption",
    text: "Childhood vaccination coverage by nation",
    size: "m"
  },
  firstCellIsHeader: true,
  scroll: true,
  head: [
    {
      text: "Nation"
    },
    {
      text: "2013 to 2014",
      format: "numeric"
    },
    {
      text: "2014 to 2015",
      format: "numeric"
    },
    {
      text: "2015 to 2016",
      format: "numeric"
    },
    {
      text: "2016 to 2017",
      format: "numeric"
    },
    {
      text: "2017 to 2018",
      format: "numeric"
    },
    {
      text: "2018 to 2019",
      format: "numeric"
    },
    {
      text: "2019 to 2020",
      format: "numeric"
    },
    {
      text: "2020 to 2021",
      format: "numeric"
    },
    {
      text: "2021 to 2022",
      format: "numeric"
    },
    {
      text: "2022 to 2023",
      format: "numeric"
    },
    {
      text: "2023 to 2024",
      format: "numeric"
    },
    {
      text: "2024 to 2025",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "England"
      },
      {
        text: "94.34%"
      },
      {
        text: "94.23%"
      },
      {
        text: "93.56%"
      },
      {
        text: "93.41%"
      },
      {
        text: "93.12%"
      },
      {
        text: "92.09%"
      },
      {
        text: "92.57%"
      },
      {
        text: "92.04%"
      },
      {
        text: "91.84%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.22%"
      },
      {
        text: "91.30%"
      }
    ],
    [
      {
        text: "Northern Ireland"
      },
      {
        text: "97.48%"
      },
      {
        text: "96.84%"
      },
      {
        text: "97.22%"
      },
      {
        text: "97.04%"
      },
      {
        text: "96.20%"
      },
      {
        text: "94.52%"
      },
      {
        text: "94.45%"
      },
      {
        text: "94.53%"
      },
      {
        text: "93.52%"
      },
      {
        text: "93.10%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.00%"
      }
    ],
    [
      {
        text: "Scotland"
      },
      {
        text: "97.51%"
      },
      {
        text: "97.39%"
      },
      {
        text: "97.15%"
      },
      {
        text: "96.77%"
      },
      {
        text: "96.51%"
      },
      {
        text: "95.80%"
      },
      {
        text: "96.23%"
      },
      {
        text: "96.54%"
      },
      {
        text: "96.32%"
      },
      {
        text: "95.55%"
      },
      {
        text: "94.84%"
      },
      {
        text: "94.50%"
      }
    ],
    [
      {
        text: "Wales"
      },
      {
        text: "96.70%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.34%"
      },
      {
        text: "95.92%"
      },
      {
        text: "95.42%"
      },
      {
        text: "95.77%"
      },
      {
        text: "95.56%"
      },
      {
        text: "95.18%"
      },
      {
        text: "94.47%"
      },
      {
        text: "94.19%"
      },
      {
        text: "94.10%"
      }
    ]
  ],
  striped: true
}) }}
```

### reverse

```njk
{{ table({
  caption: {
    id: "scrolling-caption",
    text: "Childhood vaccination coverage by nation",
    size: "m"
  },
  firstCellIsHeader: true,
  scroll: true,
  head: [
    {
      text: "Nation"
    },
    {
      text: "2013 to 2014",
      format: "numeric"
    },
    {
      text: "2014 to 2015",
      format: "numeric"
    },
    {
      text: "2015 to 2016",
      format: "numeric"
    },
    {
      text: "2016 to 2017",
      format: "numeric"
    },
    {
      text: "2017 to 2018",
      format: "numeric"
    },
    {
      text: "2018 to 2019",
      format: "numeric"
    },
    {
      text: "2019 to 2020",
      format: "numeric"
    },
    {
      text: "2020 to 2021",
      format: "numeric"
    },
    {
      text: "2021 to 2022",
      format: "numeric"
    },
    {
      text: "2022 to 2023",
      format: "numeric"
    },
    {
      text: "2023 to 2024",
      format: "numeric"
    },
    {
      text: "2024 to 2025",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "England"
      },
      {
        text: "94.34%"
      },
      {
        text: "94.23%"
      },
      {
        text: "93.56%"
      },
      {
        text: "93.41%"
      },
      {
        text: "93.12%"
      },
      {
        text: "92.09%"
      },
      {
        text: "92.57%"
      },
      {
        text: "92.04%"
      },
      {
        text: "91.84%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.22%"
      },
      {
        text: "91.30%"
      }
    ],
    [
      {
        text: "Northern Ireland"
      },
      {
        text: "97.48%"
      },
      {
        text: "96.84%"
      },
      {
        text: "97.22%"
      },
      {
        text: "97.04%"
      },
      {
        text: "96.20%"
      },
      {
        text: "94.52%"
      },
      {
        text: "94.45%"
      },
      {
        text: "94.53%"
      },
      {
        text: "93.52%"
      },
      {
        text: "93.10%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.00%"
      }
    ],
    [
      {
        text: "Scotland"
      },
      {
        text: "97.51%"
      },
      {
        text: "97.39%"
      },
      {
        text: "97.15%"
      },
      {
        text: "96.77%"
      },
      {
        text: "96.51%"
      },
      {
        text: "95.80%"
      },
      {
        text: "96.23%"
      },
      {
        text: "96.54%"
      },
      {
        text: "96.32%"
      },
      {
        text: "95.55%"
      },
      {
        text: "94.84%"
      },
      {
        text: "94.50%"
      }
    ],
    [
      {
        text: "Wales"
      },
      {
        text: "96.70%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.34%"
      },
      {
        text: "95.92%"
      },
      {
        text: "95.42%"
      },
      {
        text: "95.77%"
      },
      {
        text: "95.56%"
      },
      {
        text: "95.18%"
      },
      {
        text: "94.47%"
      },
      {
        text: "94.19%"
      },
      {
        text: "94.10%"
      }
    ]
  ],
  variant: "reverse"
}) }}
```

## scrolling as a card

### striped

```njk
{{ table({
  card: {
    heading: {
      text: "Leeds",
      size: "m"
    },
    actions: {
      items: [
        {
          text: "Edit",
          href: "#/view/leeds"
        }
      ]
    }
  },
  caption: {
    id: "scrolling-card-caption",
    text: "Vaccine types (12 months)",
    size: "s"
  },
  lastRowBorder: false,
  scroll: true,
  head: [
    {
      text: "Location"
    },
    {
      text: "6‑in‑1",
      format: "numeric",
      align: "left"
    },
    {
      text: "MenB",
      format: "numeric",
      align: "left"
    },
    {
      text: "Pneumococcal",
      format: "numeric",
      align: "left"
    },
    {
      text: "Rotavirus",
      format: "numeric",
      align: "left"
    }
  ],
  rows: [
    [
      {
        text: "England"
      },
      {
        text: "91.30%"
      },
      {
        text: "91.00%"
      },
      {
        text: "93.10%"
      },
      {
        text: "88.80%"
      }
    ],
    [
      {
        text: "Yorkshire"
      },
      {
        text: "91.90%"
      },
      {
        text: "91.80%"
      },
      {
        text: "94.20%"
      },
      {
        text: "89.20%"
      }
    ],
    [
      {
        text: "Leeds"
      },
      {
        text: "88.40%"
      },
      {
        text: "88.50%"
      },
      {
        text: "92.20%"
      },
      {
        text: "85.60%"
      }
    ]
  ],
  striped: true
}) }}
```

### responsive

```njk
{{ table({
  card: {
    heading: {
      text: "Leeds",
      size: "m"
    },
    actions: {
      items: [
        {
          text: "Edit",
          href: "#/view/leeds"
        }
      ]
    }
  },
  caption: {
    id: "scrolling-card-caption",
    text: "Vaccine types (12 months)",
    size: "s"
  },
  lastRowBorder: false,
  scroll: true,
  head: [
    {
      text: "Location"
    },
    {
      text: "6‑in‑1",
      format: "numeric",
      align: "left"
    },
    {
      text: "MenB",
      format: "numeric",
      align: "left"
    },
    {
      text: "Pneumococcal",
      format: "numeric",
      align: "left"
    },
    {
      text: "Rotavirus",
      format: "numeric",
      align: "left"
    }
  ],
  rows: [
    [
      {
        text: "England"
      },
      {
        text: "91.30%"
      },
      {
        text: "91.00%"
      },
      {
        text: "93.10%"
      },
      {
        text: "88.80%"
      }
    ],
    [
      {
        text: "Yorkshire"
      },
      {
        text: "91.90%"
      },
      {
        text: "91.80%"
      },
      {
        text: "94.20%"
      },
      {
        text: "89.20%"
      }
    ],
    [
      {
        text: "Leeds"
      },
      {
        text: "88.40%"
      },
      {
        text: "88.50%"
      },
      {
        text: "92.20%"
      },
      {
        text: "85.60%"
      }
    ]
  ],
  responsive: true
}) }}
```

## scrolling (full width)

### striped

```njk
{{ table({
  caption: {
    id: "scrolling-full-width-caption",
    text: "Childhood vaccination coverage by nation",
    size: "m"
  },
  firstCellIsHeader: true,
  scroll: true,
  head: [
    {
      text: "Nation"
    },
    {
      text: "2013 to 2014",
      format: "numeric"
    },
    {
      text: "2014 to 2015",
      format: "numeric"
    },
    {
      text: "2015 to 2016",
      format: "numeric"
    },
    {
      text: "2016 to 2017",
      format: "numeric"
    },
    {
      text: "2017 to 2018",
      format: "numeric"
    },
    {
      text: "2018 to 2019",
      format: "numeric"
    },
    {
      text: "2019 to 2020",
      format: "numeric"
    },
    {
      text: "2020 to 2021",
      format: "numeric"
    },
    {
      text: "2021 to 2022",
      format: "numeric"
    },
    {
      text: "2022 to 2023",
      format: "numeric"
    },
    {
      text: "2023 to 2024",
      format: "numeric"
    },
    {
      text: "2024 to 2025",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "England"
      },
      {
        text: "94.34%"
      },
      {
        text: "94.23%"
      },
      {
        text: "93.56%"
      },
      {
        text: "93.41%"
      },
      {
        text: "93.12%"
      },
      {
        text: "92.09%"
      },
      {
        text: "92.57%"
      },
      {
        text: "92.04%"
      },
      {
        text: "91.84%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.22%"
      },
      {
        text: "91.30%"
      }
    ],
    [
      {
        text: "Northern Ireland"
      },
      {
        text: "97.48%"
      },
      {
        text: "96.84%"
      },
      {
        text: "97.22%"
      },
      {
        text: "97.04%"
      },
      {
        text: "96.20%"
      },
      {
        text: "94.52%"
      },
      {
        text: "94.45%"
      },
      {
        text: "94.53%"
      },
      {
        text: "93.52%"
      },
      {
        text: "93.10%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.00%"
      }
    ],
    [
      {
        text: "Scotland"
      },
      {
        text: "97.51%"
      },
      {
        text: "97.39%"
      },
      {
        text: "97.15%"
      },
      {
        text: "96.77%"
      },
      {
        text: "96.51%"
      },
      {
        text: "95.80%"
      },
      {
        text: "96.23%"
      },
      {
        text: "96.54%"
      },
      {
        text: "96.32%"
      },
      {
        text: "95.55%"
      },
      {
        text: "94.84%"
      },
      {
        text: "94.50%"
      }
    ],
    [
      {
        text: "Wales"
      },
      {
        text: "96.70%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.34%"
      },
      {
        text: "95.92%"
      },
      {
        text: "95.42%"
      },
      {
        text: "95.77%"
      },
      {
        text: "95.56%"
      },
      {
        text: "95.18%"
      },
      {
        text: "94.47%"
      },
      {
        text: "94.19%"
      },
      {
        text: "94.10%"
      }
    ]
  ],
  striped: true
}) }}
```

### reverse

```njk
{{ table({
  caption: {
    id: "scrolling-full-width-caption",
    text: "Childhood vaccination coverage by nation",
    size: "m"
  },
  firstCellIsHeader: true,
  scroll: true,
  head: [
    {
      text: "Nation"
    },
    {
      text: "2013 to 2014",
      format: "numeric"
    },
    {
      text: "2014 to 2015",
      format: "numeric"
    },
    {
      text: "2015 to 2016",
      format: "numeric"
    },
    {
      text: "2016 to 2017",
      format: "numeric"
    },
    {
      text: "2017 to 2018",
      format: "numeric"
    },
    {
      text: "2018 to 2019",
      format: "numeric"
    },
    {
      text: "2019 to 2020",
      format: "numeric"
    },
    {
      text: "2020 to 2021",
      format: "numeric"
    },
    {
      text: "2021 to 2022",
      format: "numeric"
    },
    {
      text: "2022 to 2023",
      format: "numeric"
    },
    {
      text: "2023 to 2024",
      format: "numeric"
    },
    {
      text: "2024 to 2025",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "England"
      },
      {
        text: "94.34%"
      },
      {
        text: "94.23%"
      },
      {
        text: "93.56%"
      },
      {
        text: "93.41%"
      },
      {
        text: "93.12%"
      },
      {
        text: "92.09%"
      },
      {
        text: "92.57%"
      },
      {
        text: "92.04%"
      },
      {
        text: "91.84%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.22%"
      },
      {
        text: "91.30%"
      }
    ],
    [
      {
        text: "Northern Ireland"
      },
      {
        text: "97.48%"
      },
      {
        text: "96.84%"
      },
      {
        text: "97.22%"
      },
      {
        text: "97.04%"
      },
      {
        text: "96.20%"
      },
      {
        text: "94.52%"
      },
      {
        text: "94.45%"
      },
      {
        text: "94.53%"
      },
      {
        text: "93.52%"
      },
      {
        text: "93.10%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.00%"
      }
    ],
    [
      {
        text: "Scotland"
      },
      {
        text: "97.51%"
      },
      {
        text: "97.39%"
      },
      {
        text: "97.15%"
      },
      {
        text: "96.77%"
      },
      {
        text: "96.51%"
      },
      {
        text: "95.80%"
      },
      {
        text: "96.23%"
      },
      {
        text: "96.54%"
      },
      {
        text: "96.32%"
      },
      {
        text: "95.55%"
      },
      {
        text: "94.84%"
      },
      {
        text: "94.50%"
      }
    ],
    [
      {
        text: "Wales"
      },
      {
        text: "96.70%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.34%"
      },
      {
        text: "95.92%"
      },
      {
        text: "95.42%"
      },
      {
        text: "95.77%"
      },
      {
        text: "95.56%"
      },
      {
        text: "95.18%"
      },
      {
        text: "94.47%"
      },
      {
        text: "94.19%"
      },
      {
        text: "94.10%"
      }
    ]
  ],
  variant: "reverse"
}) }}
```

## scrolling sortable

### striped

```njk
{{ table({
  caption: {
    id: "scrolling-sortable-caption",
    text: "Childhood vaccination coverage by nation",
    size: "m"
  },
  firstCellIsHeader: true,
  scroll: true,
  head: [
    {
      text: "Nation",
      sort: "ascending"
    },
    {
      text: "2013 to 2014",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2014 to 2015",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2015 to 2016",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2016 to 2017",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2017 to 2018",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2018 to 2019",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2019 to 2020",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2020 to 2021",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2021 to 2022",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2022 to 2023",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2023 to 2024",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2024 to 2025",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    }
  ],
  rows: [
    [
      {
        text: "England"
      },
      {
        text: "94.34%"
      },
      {
        text: "94.23%"
      },
      {
        text: "93.56%"
      },
      {
        text: "93.41%"
      },
      {
        text: "93.12%"
      },
      {
        text: "92.09%"
      },
      {
        text: "92.57%"
      },
      {
        text: "92.04%"
      },
      {
        text: "91.84%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.22%"
      },
      {
        text: "91.30%"
      }
    ],
    [
      {
        text: "Northern Ireland"
      },
      {
        text: "97.48%"
      },
      {
        text: "96.84%"
      },
      {
        text: "97.22%"
      },
      {
        text: "97.04%"
      },
      {
        text: "96.20%"
      },
      {
        text: "94.52%"
      },
      {
        text: "94.45%"
      },
      {
        text: "94.53%"
      },
      {
        text: "93.52%"
      },
      {
        text: "93.10%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.00%"
      }
    ],
    [
      {
        text: "Scotland"
      },
      {
        text: "97.51%"
      },
      {
        text: "97.39%"
      },
      {
        text: "97.15%"
      },
      {
        text: "96.77%"
      },
      {
        text: "96.51%"
      },
      {
        text: "95.80%"
      },
      {
        text: "96.23%"
      },
      {
        text: "96.54%"
      },
      {
        text: "96.32%"
      },
      {
        text: "95.55%"
      },
      {
        text: "94.84%"
      },
      {
        text: "94.50%"
      }
    ],
    [
      {
        text: "Wales"
      },
      {
        text: "96.70%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.34%"
      },
      {
        text: "95.92%"
      },
      {
        text: "95.42%"
      },
      {
        text: "95.77%"
      },
      {
        text: "95.56%"
      },
      {
        text: "95.18%"
      },
      {
        text: "94.47%"
      },
      {
        text: "94.19%"
      },
      {
        text: "94.10%"
      }
    ]
  ],
  striped: true
}) }}
```

### reverse

```njk
{{ table({
  caption: {
    id: "scrolling-sortable-caption",
    text: "Childhood vaccination coverage by nation",
    size: "m"
  },
  firstCellIsHeader: true,
  scroll: true,
  head: [
    {
      text: "Nation",
      sort: "ascending"
    },
    {
      text: "2013 to 2014",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2014 to 2015",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2015 to 2016",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2016 to 2017",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2017 to 2018",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2018 to 2019",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2019 to 2020",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2020 to 2021",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2021 to 2022",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2022 to 2023",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2023 to 2024",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2024 to 2025",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    }
  ],
  rows: [
    [
      {
        text: "England"
      },
      {
        text: "94.34%"
      },
      {
        text: "94.23%"
      },
      {
        text: "93.56%"
      },
      {
        text: "93.41%"
      },
      {
        text: "93.12%"
      },
      {
        text: "92.09%"
      },
      {
        text: "92.57%"
      },
      {
        text: "92.04%"
      },
      {
        text: "91.84%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.22%"
      },
      {
        text: "91.30%"
      }
    ],
    [
      {
        text: "Northern Ireland"
      },
      {
        text: "97.48%"
      },
      {
        text: "96.84%"
      },
      {
        text: "97.22%"
      },
      {
        text: "97.04%"
      },
      {
        text: "96.20%"
      },
      {
        text: "94.52%"
      },
      {
        text: "94.45%"
      },
      {
        text: "94.53%"
      },
      {
        text: "93.52%"
      },
      {
        text: "93.10%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.00%"
      }
    ],
    [
      {
        text: "Scotland"
      },
      {
        text: "97.51%"
      },
      {
        text: "97.39%"
      },
      {
        text: "97.15%"
      },
      {
        text: "96.77%"
      },
      {
        text: "96.51%"
      },
      {
        text: "95.80%"
      },
      {
        text: "96.23%"
      },
      {
        text: "96.54%"
      },
      {
        text: "96.32%"
      },
      {
        text: "95.55%"
      },
      {
        text: "94.84%"
      },
      {
        text: "94.50%"
      }
    ],
    [
      {
        text: "Wales"
      },
      {
        text: "96.70%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.34%"
      },
      {
        text: "95.92%"
      },
      {
        text: "95.42%"
      },
      {
        text: "95.77%"
      },
      {
        text: "95.56%"
      },
      {
        text: "95.18%"
      },
      {
        text: "94.47%"
      },
      {
        text: "94.19%"
      },
      {
        text: "94.10%"
      }
    ]
  ],
  variant: "reverse"
}) }}
```

## scrolling sortable as a card

### striped

```njk
{{ table({
  card: {
    heading: {
      text: "Leeds",
      size: "m"
    },
    actions: {
      items: [
        {
          text: "Edit",
          href: "#/view/leeds"
        }
      ]
    }
  },
  caption: {
    id: "scrolling-card-caption",
    text: "Vaccine types (12 months)",
    size: "s"
  },
  lastRowBorder: false,
  scroll: true,
  head: [
    {
      text: "Location"
    },
    {
      text: "6‑in‑1",
      format: "numeric",
      align: "left",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "MenB",
      format: "numeric",
      align: "left",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "Pneumococcal",
      format: "numeric",
      align: "left",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "Rotavirus",
      format: "numeric",
      align: "left",
      sort: true,
      sortNext: "descending"
    }
  ],
  rows: [
    [
      {
        text: "England"
      },
      {
        text: "91.30%"
      },
      {
        text: "91.00%"
      },
      {
        text: "93.10%"
      },
      {
        text: "88.80%"
      }
    ],
    [
      {
        text: "Yorkshire"
      },
      {
        text: "91.90%"
      },
      {
        text: "91.80%"
      },
      {
        text: "94.20%"
      },
      {
        text: "89.20%"
      }
    ],
    [
      {
        text: "Leeds"
      },
      {
        text: "88.40%"
      },
      {
        text: "88.50%"
      },
      {
        text: "92.20%"
      },
      {
        text: "85.60%"
      }
    ]
  ],
  striped: true
}) }}
```

### responsive

```njk
{{ table({
  card: {
    heading: {
      text: "Leeds",
      size: "m"
    },
    actions: {
      items: [
        {
          text: "Edit",
          href: "#/view/leeds"
        }
      ]
    }
  },
  caption: {
    id: "scrolling-card-caption",
    text: "Vaccine types (12 months)",
    size: "s"
  },
  lastRowBorder: false,
  scroll: true,
  head: [
    {
      text: "Location"
    },
    {
      text: "6‑in‑1",
      format: "numeric",
      align: "left",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "MenB",
      format: "numeric",
      align: "left",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "Pneumococcal",
      format: "numeric",
      align: "left",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "Rotavirus",
      format: "numeric",
      align: "left",
      sort: true,
      sortNext: "descending"
    }
  ],
  rows: [
    [
      {
        text: "England"
      },
      {
        text: "91.30%"
      },
      {
        text: "91.00%"
      },
      {
        text: "93.10%"
      },
      {
        text: "88.80%"
      }
    ],
    [
      {
        text: "Yorkshire"
      },
      {
        text: "91.90%"
      },
      {
        text: "91.80%"
      },
      {
        text: "94.20%"
      },
      {
        text: "89.20%"
      }
    ],
    [
      {
        text: "Leeds"
      },
      {
        text: "88.40%"
      },
      {
        text: "88.50%"
      },
      {
        text: "92.20%"
      },
      {
        text: "85.60%"
      }
    ]
  ],
  responsive: true
}) }}
```

## scrolling sortable (full width)

### striped

```njk
{{ table({
  caption: {
    id: "scrolling-sortable-full-width-caption",
    text: "Childhood vaccination coverage by nation",
    size: "m"
  },
  firstCellIsHeader: true,
  scroll: true,
  head: [
    {
      text: "Nation",
      sort: "ascending"
    },
    {
      text: "2013 to 2014",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2014 to 2015",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2015 to 2016",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2016 to 2017",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2017 to 2018",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2018 to 2019",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2019 to 2020",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2020 to 2021",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2021 to 2022",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2022 to 2023",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2023 to 2024",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2024 to 2025",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    }
  ],
  rows: [
    [
      {
        text: "England"
      },
      {
        text: "94.34%"
      },
      {
        text: "94.23%"
      },
      {
        text: "93.56%"
      },
      {
        text: "93.41%"
      },
      {
        text: "93.12%"
      },
      {
        text: "92.09%"
      },
      {
        text: "92.57%"
      },
      {
        text: "92.04%"
      },
      {
        text: "91.84%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.22%"
      },
      {
        text: "91.30%"
      }
    ],
    [
      {
        text: "Northern Ireland"
      },
      {
        text: "97.48%"
      },
      {
        text: "96.84%"
      },
      {
        text: "97.22%"
      },
      {
        text: "97.04%"
      },
      {
        text: "96.20%"
      },
      {
        text: "94.52%"
      },
      {
        text: "94.45%"
      },
      {
        text: "94.53%"
      },
      {
        text: "93.52%"
      },
      {
        text: "93.10%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.00%"
      }
    ],
    [
      {
        text: "Scotland"
      },
      {
        text: "97.51%"
      },
      {
        text: "97.39%"
      },
      {
        text: "97.15%"
      },
      {
        text: "96.77%"
      },
      {
        text: "96.51%"
      },
      {
        text: "95.80%"
      },
      {
        text: "96.23%"
      },
      {
        text: "96.54%"
      },
      {
        text: "96.32%"
      },
      {
        text: "95.55%"
      },
      {
        text: "94.84%"
      },
      {
        text: "94.50%"
      }
    ],
    [
      {
        text: "Wales"
      },
      {
        text: "96.70%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.34%"
      },
      {
        text: "95.92%"
      },
      {
        text: "95.42%"
      },
      {
        text: "95.77%"
      },
      {
        text: "95.56%"
      },
      {
        text: "95.18%"
      },
      {
        text: "94.47%"
      },
      {
        text: "94.19%"
      },
      {
        text: "94.10%"
      }
    ]
  ],
  striped: true
}) }}
```

### reverse

```njk
{{ table({
  caption: {
    id: "scrolling-sortable-full-width-caption",
    text: "Childhood vaccination coverage by nation",
    size: "m"
  },
  firstCellIsHeader: true,
  scroll: true,
  head: [
    {
      text: "Nation",
      sort: "ascending"
    },
    {
      text: "2013 to 2014",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2014 to 2015",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2015 to 2016",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2016 to 2017",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2017 to 2018",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2018 to 2019",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2019 to 2020",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2020 to 2021",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2021 to 2022",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2022 to 2023",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2023 to 2024",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "2024 to 2025",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    }
  ],
  rows: [
    [
      {
        text: "England"
      },
      {
        text: "94.34%"
      },
      {
        text: "94.23%"
      },
      {
        text: "93.56%"
      },
      {
        text: "93.41%"
      },
      {
        text: "93.12%"
      },
      {
        text: "92.09%"
      },
      {
        text: "92.57%"
      },
      {
        text: "92.04%"
      },
      {
        text: "91.84%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.22%"
      },
      {
        text: "91.30%"
      }
    ],
    [
      {
        text: "Northern Ireland"
      },
      {
        text: "97.48%"
      },
      {
        text: "96.84%"
      },
      {
        text: "97.22%"
      },
      {
        text: "97.04%"
      },
      {
        text: "96.20%"
      },
      {
        text: "94.52%"
      },
      {
        text: "94.45%"
      },
      {
        text: "94.53%"
      },
      {
        text: "93.52%"
      },
      {
        text: "93.10%"
      },
      {
        text: "91.80%"
      },
      {
        text: "91.00%"
      }
    ],
    [
      {
        text: "Scotland"
      },
      {
        text: "97.51%"
      },
      {
        text: "97.39%"
      },
      {
        text: "97.15%"
      },
      {
        text: "96.77%"
      },
      {
        text: "96.51%"
      },
      {
        text: "95.80%"
      },
      {
        text: "96.23%"
      },
      {
        text: "96.54%"
      },
      {
        text: "96.32%"
      },
      {
        text: "95.55%"
      },
      {
        text: "94.84%"
      },
      {
        text: "94.50%"
      }
    ],
    [
      {
        text: "Wales"
      },
      {
        text: "96.70%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.57%"
      },
      {
        text: "96.34%"
      },
      {
        text: "95.92%"
      },
      {
        text: "95.42%"
      },
      {
        text: "95.77%"
      },
      {
        text: "95.56%"
      },
      {
        text: "95.18%"
      },
      {
        text: "94.47%"
      },
      {
        text: "94.19%"
      },
      {
        text: "94.10%"
      }
    ]
  ],
  variant: "reverse"
}) }}
```

## sortable

### compact

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Time",
      sort: "ascending"
    },
    {
      text: "Name",
      sort: true
    },
    {
      text: "Date of birth",
      classes: "nhsuk-u-nowrap"
    }
  ],
  rows: [
    [
      {
        text: "11:00"
      },
      {
        text: "Laura Stone"
      },
      {
        text: "4 January 1986"
      }
    ],
    [
      {
        text: "11:30"
      },
      {
        text: "Emma Katie-Brown"
      },
      {
        text: "7 February 1976"
      }
    ],
    [
      {
        text: "13:10"
      },
      {
        text: "David Chen"
      },
      {
        text: "19 March 1981"
      }
    ],
    [
      {
        text: "13:40"
      },
      {
        text: "Michael Thompson"
      },
      {
        text: "6 December 1964"
      }
    ],
    [
      {
        text: "14:20"
      },
      {
        text: "Juan Martinez"
      },
      {
        text: "18 April 1975"
      }
    ]
  ],
  compact: true
}) }}
```

### striped

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Time",
      sort: "ascending"
    },
    {
      text: "Name",
      sort: true
    },
    {
      text: "Date of birth",
      classes: "nhsuk-u-nowrap"
    }
  ],
  rows: [
    [
      {
        text: "11:00"
      },
      {
        text: "Laura Stone"
      },
      {
        text: "4 January 1986"
      }
    ],
    [
      {
        text: "11:30"
      },
      {
        text: "Emma Katie-Brown"
      },
      {
        text: "7 February 1976"
      }
    ],
    [
      {
        text: "13:10"
      },
      {
        text: "David Chen"
      },
      {
        text: "19 March 1981"
      }
    ],
    [
      {
        text: "13:40"
      },
      {
        text: "Michael Thompson"
      },
      {
        text: "6 December 1964"
      }
    ],
    [
      {
        text: "14:20"
      },
      {
        text: "Juan Martinez"
      },
      {
        text: "18 April 1975"
      }
    ]
  ],
  striped: true
}) }}
```

### striped compact

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Time",
      sort: "ascending"
    },
    {
      text: "Name",
      sort: true
    },
    {
      text: "Date of birth",
      classes: "nhsuk-u-nowrap"
    }
  ],
  rows: [
    [
      {
        text: "11:00"
      },
      {
        text: "Laura Stone"
      },
      {
        text: "4 January 1986"
      }
    ],
    [
      {
        text: "11:30"
      },
      {
        text: "Emma Katie-Brown"
      },
      {
        text: "7 February 1976"
      }
    ],
    [
      {
        text: "13:10"
      },
      {
        text: "David Chen"
      },
      {
        text: "19 March 1981"
      }
    ],
    [
      {
        text: "13:40"
      },
      {
        text: "Michael Thompson"
      },
      {
        text: "6 December 1964"
      }
    ],
    [
      {
        text: "14:20"
      },
      {
        text: "Juan Martinez"
      },
      {
        text: "18 April 1975"
      }
    ]
  ],
  compact: true,
  striped: true
}) }}
```

### responsive

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Time",
      sort: "ascending"
    },
    {
      text: "Name",
      sort: true
    },
    {
      text: "Date of birth",
      classes: "nhsuk-u-nowrap"
    }
  ],
  rows: [
    [
      {
        text: "11:00"
      },
      {
        text: "Laura Stone"
      },
      {
        text: "4 January 1986"
      }
    ],
    [
      {
        text: "11:30"
      },
      {
        text: "Emma Katie-Brown"
      },
      {
        text: "7 February 1976"
      }
    ],
    [
      {
        text: "13:10"
      },
      {
        text: "David Chen"
      },
      {
        text: "19 March 1981"
      }
    ],
    [
      {
        text: "13:40"
      },
      {
        text: "Michael Thompson"
      },
      {
        text: "6 December 1964"
      }
    ],
    [
      {
        text: "14:20"
      },
      {
        text: "Juan Martinez"
      },
      {
        text: "18 April 1975"
      }
    ]
  ],
  responsive: true
}) }}
```

### responsive compact

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Time",
      sort: "ascending"
    },
    {
      text: "Name",
      sort: true
    },
    {
      text: "Date of birth",
      classes: "nhsuk-u-nowrap"
    }
  ],
  rows: [
    [
      {
        text: "11:00"
      },
      {
        text: "Laura Stone"
      },
      {
        text: "4 January 1986"
      }
    ],
    [
      {
        text: "11:30"
      },
      {
        text: "Emma Katie-Brown"
      },
      {
        text: "7 February 1976"
      }
    ],
    [
      {
        text: "13:10"
      },
      {
        text: "David Chen"
      },
      {
        text: "19 March 1981"
      }
    ],
    [
      {
        text: "13:40"
      },
      {
        text: "Michael Thompson"
      },
      {
        text: "6 December 1964"
      }
    ],
    [
      {
        text: "14:20"
      },
      {
        text: "Juan Martinez"
      },
      {
        text: "18 April 1975"
      }
    ]
  ],
  compact: true,
  responsive: true
}) }}
```

### responsive striped

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Time",
      sort: "ascending"
    },
    {
      text: "Name",
      sort: true
    },
    {
      text: "Date of birth",
      classes: "nhsuk-u-nowrap"
    }
  ],
  rows: [
    [
      {
        text: "11:00"
      },
      {
        text: "Laura Stone"
      },
      {
        text: "4 January 1986"
      }
    ],
    [
      {
        text: "11:30"
      },
      {
        text: "Emma Katie-Brown"
      },
      {
        text: "7 February 1976"
      }
    ],
    [
      {
        text: "13:10"
      },
      {
        text: "David Chen"
      },
      {
        text: "19 March 1981"
      }
    ],
    [
      {
        text: "13:40"
      },
      {
        text: "Michael Thompson"
      },
      {
        text: "6 December 1964"
      }
    ],
    [
      {
        text: "14:20"
      },
      {
        text: "Juan Martinez"
      },
      {
        text: "18 April 1975"
      }
    ]
  ],
  responsive: true,
  striped: true
}) }}
```

### responsive striped compact

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Time",
      sort: "ascending"
    },
    {
      text: "Name",
      sort: true
    },
    {
      text: "Date of birth",
      classes: "nhsuk-u-nowrap"
    }
  ],
  rows: [
    [
      {
        text: "11:00"
      },
      {
        text: "Laura Stone"
      },
      {
        text: "4 January 1986"
      }
    ],
    [
      {
        text: "11:30"
      },
      {
        text: "Emma Katie-Brown"
      },
      {
        text: "7 February 1976"
      }
    ],
    [
      {
        text: "13:10"
      },
      {
        text: "David Chen"
      },
      {
        text: "19 March 1981"
      }
    ],
    [
      {
        text: "13:40"
      },
      {
        text: "Michael Thompson"
      },
      {
        text: "6 December 1964"
      }
    ],
    [
      {
        text: "14:20"
      },
      {
        text: "Juan Martinez"
      },
      {
        text: "18 April 1975"
      }
    ]
  ],
  compact: true,
  responsive: true,
  striped: true
}) }}
```

### reverse

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Time",
      sort: "ascending"
    },
    {
      text: "Name",
      sort: true
    },
    {
      text: "Date of birth",
      classes: "nhsuk-u-nowrap"
    }
  ],
  rows: [
    [
      {
        text: "11:00"
      },
      {
        text: "Laura Stone"
      },
      {
        text: "4 January 1986"
      }
    ],
    [
      {
        text: "11:30"
      },
      {
        text: "Emma Katie-Brown"
      },
      {
        text: "7 February 1976"
      }
    ],
    [
      {
        text: "13:10"
      },
      {
        text: "David Chen"
      },
      {
        text: "19 March 1981"
      }
    ],
    [
      {
        text: "13:40"
      },
      {
        text: "Michael Thompson"
      },
      {
        text: "6 December 1964"
      }
    ],
    [
      {
        text: "14:20"
      },
      {
        text: "Juan Martinez"
      },
      {
        text: "18 April 1975"
      }
    ]
  ],
  variant: "reverse"
}) }}
```

### reverse compact

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Time",
      sort: "ascending"
    },
    {
      text: "Name",
      sort: true
    },
    {
      text: "Date of birth",
      classes: "nhsuk-u-nowrap"
    }
  ],
  rows: [
    [
      {
        text: "11:00"
      },
      {
        text: "Laura Stone"
      },
      {
        text: "4 January 1986"
      }
    ],
    [
      {
        text: "11:30"
      },
      {
        text: "Emma Katie-Brown"
      },
      {
        text: "7 February 1976"
      }
    ],
    [
      {
        text: "13:10"
      },
      {
        text: "David Chen"
      },
      {
        text: "19 March 1981"
      }
    ],
    [
      {
        text: "13:40"
      },
      {
        text: "Michael Thompson"
      },
      {
        text: "6 December 1964"
      }
    ],
    [
      {
        text: "14:20"
      },
      {
        text: "Juan Martinez"
      },
      {
        text: "18 April 1975"
      }
    ]
  ],
  compact: true,
  variant: "reverse"
}) }}
```

### reverse striped

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Time",
      sort: "ascending"
    },
    {
      text: "Name",
      sort: true
    },
    {
      text: "Date of birth",
      classes: "nhsuk-u-nowrap"
    }
  ],
  rows: [
    [
      {
        text: "11:00"
      },
      {
        text: "Laura Stone"
      },
      {
        text: "4 January 1986"
      }
    ],
    [
      {
        text: "11:30"
      },
      {
        text: "Emma Katie-Brown"
      },
      {
        text: "7 February 1976"
      }
    ],
    [
      {
        text: "13:10"
      },
      {
        text: "David Chen"
      },
      {
        text: "19 March 1981"
      }
    ],
    [
      {
        text: "13:40"
      },
      {
        text: "Michael Thompson"
      },
      {
        text: "6 December 1964"
      }
    ],
    [
      {
        text: "14:20"
      },
      {
        text: "Juan Martinez"
      },
      {
        text: "18 April 1975"
      }
    ]
  ],
  striped: true,
  variant: "reverse"
}) }}
```

### reverse striped compact

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Time",
      sort: "ascending"
    },
    {
      text: "Name",
      sort: true
    },
    {
      text: "Date of birth",
      classes: "nhsuk-u-nowrap"
    }
  ],
  rows: [
    [
      {
        text: "11:00"
      },
      {
        text: "Laura Stone"
      },
      {
        text: "4 January 1986"
      }
    ],
    [
      {
        text: "11:30"
      },
      {
        text: "Emma Katie-Brown"
      },
      {
        text: "7 February 1976"
      }
    ],
    [
      {
        text: "13:10"
      },
      {
        text: "David Chen"
      },
      {
        text: "19 March 1981"
      }
    ],
    [
      {
        text: "13:40"
      },
      {
        text: "Michael Thompson"
      },
      {
        text: "6 December 1964"
      }
    ],
    [
      {
        text: "14:20"
      },
      {
        text: "Juan Martinez"
      },
      {
        text: "18 April 1975"
      }
    ]
  ],
  compact: true,
  striped: true,
  variant: "reverse"
}) }}
```

## sortable server-side

### compact

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Name",
      href: "#",
      sort: "descending",
      width: "one-half"
    },
    {
      text: "Last log in",
      href: "#",
      sort: true,
      align: "right",
      width: "one-third",
      classes: "nhsuk-u-nowrap"
    },
    {
      visuallyHiddenText: "Action"
    }
  ],
  rows: [
    [
      {
        text: "Zadie Munroe"
      },
      {
        text: "7 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Zadie Munroe"
      }
    ],
    [
      {
        text: "Yolanda Pierce"
      },
      {
        text: "13 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Yolanda Pierce"
      }
    ],
    [
      {
        text: "Xanthe Beaumont"
      },
      {
        text: "19 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Xanthe Beaumont"
      }
    ],
    [
      {
        text: "Wendell Shaw"
      },
      {
        text: "25 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Wendell Shaw"
      }
    ],
    [
      {
        text: "Val Cruz"
      },
      {
        text: "1 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Val Cruz"
      }
    ],
    [
      {
        text: "Uta Brennan"
      },
      {
        text: "7 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Uta Brennan"
      }
    ],
    [
      {
        text: "Tamsin Foley-Whitworth"
      },
      {
        text: "14 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Tamsin Foley-Whitworth"
      }
    ],
    [
      {
        text: "Stellan Park"
      },
      {
        text: "20 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Stellan Park"
      }
    ],
    [
      {
        text: "Ro Nkosi"
      },
      {
        text: "28 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Ro Nkosi"
      }
    ],
    [
      {
        text: "Reuben Tate"
      },
      {
        text: "1 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Reuben Tate"
      }
    ]
  ],
  compact: true
}) }}
```

### striped

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Name",
      href: "#",
      sort: "descending",
      width: "one-half"
    },
    {
      text: "Last log in",
      href: "#",
      sort: true,
      align: "right",
      width: "one-third",
      classes: "nhsuk-u-nowrap"
    },
    {
      visuallyHiddenText: "Action"
    }
  ],
  rows: [
    [
      {
        text: "Zadie Munroe"
      },
      {
        text: "7 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Zadie Munroe"
      }
    ],
    [
      {
        text: "Yolanda Pierce"
      },
      {
        text: "13 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Yolanda Pierce"
      }
    ],
    [
      {
        text: "Xanthe Beaumont"
      },
      {
        text: "19 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Xanthe Beaumont"
      }
    ],
    [
      {
        text: "Wendell Shaw"
      },
      {
        text: "25 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Wendell Shaw"
      }
    ],
    [
      {
        text: "Val Cruz"
      },
      {
        text: "1 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Val Cruz"
      }
    ],
    [
      {
        text: "Uta Brennan"
      },
      {
        text: "7 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Uta Brennan"
      }
    ],
    [
      {
        text: "Tamsin Foley-Whitworth"
      },
      {
        text: "14 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Tamsin Foley-Whitworth"
      }
    ],
    [
      {
        text: "Stellan Park"
      },
      {
        text: "20 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Stellan Park"
      }
    ],
    [
      {
        text: "Ro Nkosi"
      },
      {
        text: "28 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Ro Nkosi"
      }
    ],
    [
      {
        text: "Reuben Tate"
      },
      {
        text: "1 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Reuben Tate"
      }
    ]
  ],
  striped: true
}) }}
```

### striped compact

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Name",
      href: "#",
      sort: "descending",
      width: "one-half"
    },
    {
      text: "Last log in",
      href: "#",
      sort: true,
      align: "right",
      width: "one-third",
      classes: "nhsuk-u-nowrap"
    },
    {
      visuallyHiddenText: "Action"
    }
  ],
  rows: [
    [
      {
        text: "Zadie Munroe"
      },
      {
        text: "7 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Zadie Munroe"
      }
    ],
    [
      {
        text: "Yolanda Pierce"
      },
      {
        text: "13 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Yolanda Pierce"
      }
    ],
    [
      {
        text: "Xanthe Beaumont"
      },
      {
        text: "19 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Xanthe Beaumont"
      }
    ],
    [
      {
        text: "Wendell Shaw"
      },
      {
        text: "25 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Wendell Shaw"
      }
    ],
    [
      {
        text: "Val Cruz"
      },
      {
        text: "1 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Val Cruz"
      }
    ],
    [
      {
        text: "Uta Brennan"
      },
      {
        text: "7 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Uta Brennan"
      }
    ],
    [
      {
        text: "Tamsin Foley-Whitworth"
      },
      {
        text: "14 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Tamsin Foley-Whitworth"
      }
    ],
    [
      {
        text: "Stellan Park"
      },
      {
        text: "20 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Stellan Park"
      }
    ],
    [
      {
        text: "Ro Nkosi"
      },
      {
        text: "28 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Ro Nkosi"
      }
    ],
    [
      {
        text: "Reuben Tate"
      },
      {
        text: "1 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Reuben Tate"
      }
    ]
  ],
  compact: true,
  striped: true
}) }}
```

### responsive

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Name",
      href: "#",
      sort: "descending",
      width: "one-half"
    },
    {
      text: "Last log in",
      href: "#",
      sort: true,
      align: "right",
      width: "one-third",
      classes: "nhsuk-u-nowrap"
    },
    {
      visuallyHiddenText: "Action"
    }
  ],
  rows: [
    [
      {
        text: "Zadie Munroe"
      },
      {
        text: "7 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Zadie Munroe"
      }
    ],
    [
      {
        text: "Yolanda Pierce"
      },
      {
        text: "13 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Yolanda Pierce"
      }
    ],
    [
      {
        text: "Xanthe Beaumont"
      },
      {
        text: "19 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Xanthe Beaumont"
      }
    ],
    [
      {
        text: "Wendell Shaw"
      },
      {
        text: "25 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Wendell Shaw"
      }
    ],
    [
      {
        text: "Val Cruz"
      },
      {
        text: "1 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Val Cruz"
      }
    ],
    [
      {
        text: "Uta Brennan"
      },
      {
        text: "7 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Uta Brennan"
      }
    ],
    [
      {
        text: "Tamsin Foley-Whitworth"
      },
      {
        text: "14 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Tamsin Foley-Whitworth"
      }
    ],
    [
      {
        text: "Stellan Park"
      },
      {
        text: "20 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Stellan Park"
      }
    ],
    [
      {
        text: "Ro Nkosi"
      },
      {
        text: "28 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Ro Nkosi"
      }
    ],
    [
      {
        text: "Reuben Tate"
      },
      {
        text: "1 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Reuben Tate"
      }
    ]
  ],
  responsive: true
}) }}
```

### responsive compact

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Name",
      href: "#",
      sort: "descending",
      width: "one-half"
    },
    {
      text: "Last log in",
      href: "#",
      sort: true,
      align: "right",
      width: "one-third",
      classes: "nhsuk-u-nowrap"
    },
    {
      visuallyHiddenText: "Action"
    }
  ],
  rows: [
    [
      {
        text: "Zadie Munroe"
      },
      {
        text: "7 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Zadie Munroe"
      }
    ],
    [
      {
        text: "Yolanda Pierce"
      },
      {
        text: "13 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Yolanda Pierce"
      }
    ],
    [
      {
        text: "Xanthe Beaumont"
      },
      {
        text: "19 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Xanthe Beaumont"
      }
    ],
    [
      {
        text: "Wendell Shaw"
      },
      {
        text: "25 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Wendell Shaw"
      }
    ],
    [
      {
        text: "Val Cruz"
      },
      {
        text: "1 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Val Cruz"
      }
    ],
    [
      {
        text: "Uta Brennan"
      },
      {
        text: "7 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Uta Brennan"
      }
    ],
    [
      {
        text: "Tamsin Foley-Whitworth"
      },
      {
        text: "14 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Tamsin Foley-Whitworth"
      }
    ],
    [
      {
        text: "Stellan Park"
      },
      {
        text: "20 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Stellan Park"
      }
    ],
    [
      {
        text: "Ro Nkosi"
      },
      {
        text: "28 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Ro Nkosi"
      }
    ],
    [
      {
        text: "Reuben Tate"
      },
      {
        text: "1 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Reuben Tate"
      }
    ]
  ],
  compact: true,
  responsive: true
}) }}
```

### responsive striped

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Name",
      href: "#",
      sort: "descending",
      width: "one-half"
    },
    {
      text: "Last log in",
      href: "#",
      sort: true,
      align: "right",
      width: "one-third",
      classes: "nhsuk-u-nowrap"
    },
    {
      visuallyHiddenText: "Action"
    }
  ],
  rows: [
    [
      {
        text: "Zadie Munroe"
      },
      {
        text: "7 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Zadie Munroe"
      }
    ],
    [
      {
        text: "Yolanda Pierce"
      },
      {
        text: "13 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Yolanda Pierce"
      }
    ],
    [
      {
        text: "Xanthe Beaumont"
      },
      {
        text: "19 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Xanthe Beaumont"
      }
    ],
    [
      {
        text: "Wendell Shaw"
      },
      {
        text: "25 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Wendell Shaw"
      }
    ],
    [
      {
        text: "Val Cruz"
      },
      {
        text: "1 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Val Cruz"
      }
    ],
    [
      {
        text: "Uta Brennan"
      },
      {
        text: "7 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Uta Brennan"
      }
    ],
    [
      {
        text: "Tamsin Foley-Whitworth"
      },
      {
        text: "14 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Tamsin Foley-Whitworth"
      }
    ],
    [
      {
        text: "Stellan Park"
      },
      {
        text: "20 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Stellan Park"
      }
    ],
    [
      {
        text: "Ro Nkosi"
      },
      {
        text: "28 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Ro Nkosi"
      }
    ],
    [
      {
        text: "Reuben Tate"
      },
      {
        text: "1 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Reuben Tate"
      }
    ]
  ],
  responsive: true,
  striped: true
}) }}
```

### responsive striped compact

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Name",
      href: "#",
      sort: "descending",
      width: "one-half"
    },
    {
      text: "Last log in",
      href: "#",
      sort: true,
      align: "right",
      width: "one-third",
      classes: "nhsuk-u-nowrap"
    },
    {
      visuallyHiddenText: "Action"
    }
  ],
  rows: [
    [
      {
        text: "Zadie Munroe"
      },
      {
        text: "7 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Zadie Munroe"
      }
    ],
    [
      {
        text: "Yolanda Pierce"
      },
      {
        text: "13 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Yolanda Pierce"
      }
    ],
    [
      {
        text: "Xanthe Beaumont"
      },
      {
        text: "19 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Xanthe Beaumont"
      }
    ],
    [
      {
        text: "Wendell Shaw"
      },
      {
        text: "25 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Wendell Shaw"
      }
    ],
    [
      {
        text: "Val Cruz"
      },
      {
        text: "1 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Val Cruz"
      }
    ],
    [
      {
        text: "Uta Brennan"
      },
      {
        text: "7 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Uta Brennan"
      }
    ],
    [
      {
        text: "Tamsin Foley-Whitworth"
      },
      {
        text: "14 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Tamsin Foley-Whitworth"
      }
    ],
    [
      {
        text: "Stellan Park"
      },
      {
        text: "20 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Stellan Park"
      }
    ],
    [
      {
        text: "Ro Nkosi"
      },
      {
        text: "28 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Ro Nkosi"
      }
    ],
    [
      {
        text: "Reuben Tate"
      },
      {
        text: "1 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Reuben Tate"
      }
    ]
  ],
  compact: true,
  responsive: true,
  striped: true
}) }}
```

### reverse

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Name",
      href: "#",
      sort: "descending",
      width: "one-half"
    },
    {
      text: "Last log in",
      href: "#",
      sort: true,
      align: "right",
      width: "one-third",
      classes: "nhsuk-u-nowrap"
    },
    {
      visuallyHiddenText: "Action"
    }
  ],
  rows: [
    [
      {
        text: "Zadie Munroe"
      },
      {
        text: "7 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Zadie Munroe"
      }
    ],
    [
      {
        text: "Yolanda Pierce"
      },
      {
        text: "13 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Yolanda Pierce"
      }
    ],
    [
      {
        text: "Xanthe Beaumont"
      },
      {
        text: "19 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Xanthe Beaumont"
      }
    ],
    [
      {
        text: "Wendell Shaw"
      },
      {
        text: "25 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Wendell Shaw"
      }
    ],
    [
      {
        text: "Val Cruz"
      },
      {
        text: "1 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Val Cruz"
      }
    ],
    [
      {
        text: "Uta Brennan"
      },
      {
        text: "7 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Uta Brennan"
      }
    ],
    [
      {
        text: "Tamsin Foley-Whitworth"
      },
      {
        text: "14 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Tamsin Foley-Whitworth"
      }
    ],
    [
      {
        text: "Stellan Park"
      },
      {
        text: "20 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Stellan Park"
      }
    ],
    [
      {
        text: "Ro Nkosi"
      },
      {
        text: "28 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Ro Nkosi"
      }
    ],
    [
      {
        text: "Reuben Tate"
      },
      {
        text: "1 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Reuben Tate"
      }
    ]
  ],
  variant: "reverse"
}) }}
```

### reverse compact

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Name",
      href: "#",
      sort: "descending",
      width: "one-half"
    },
    {
      text: "Last log in",
      href: "#",
      sort: true,
      align: "right",
      width: "one-third",
      classes: "nhsuk-u-nowrap"
    },
    {
      visuallyHiddenText: "Action"
    }
  ],
  rows: [
    [
      {
        text: "Zadie Munroe"
      },
      {
        text: "7 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Zadie Munroe"
      }
    ],
    [
      {
        text: "Yolanda Pierce"
      },
      {
        text: "13 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Yolanda Pierce"
      }
    ],
    [
      {
        text: "Xanthe Beaumont"
      },
      {
        text: "19 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Xanthe Beaumont"
      }
    ],
    [
      {
        text: "Wendell Shaw"
      },
      {
        text: "25 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Wendell Shaw"
      }
    ],
    [
      {
        text: "Val Cruz"
      },
      {
        text: "1 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Val Cruz"
      }
    ],
    [
      {
        text: "Uta Brennan"
      },
      {
        text: "7 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Uta Brennan"
      }
    ],
    [
      {
        text: "Tamsin Foley-Whitworth"
      },
      {
        text: "14 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Tamsin Foley-Whitworth"
      }
    ],
    [
      {
        text: "Stellan Park"
      },
      {
        text: "20 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Stellan Park"
      }
    ],
    [
      {
        text: "Ro Nkosi"
      },
      {
        text: "28 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Ro Nkosi"
      }
    ],
    [
      {
        text: "Reuben Tate"
      },
      {
        text: "1 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Reuben Tate"
      }
    ]
  ],
  compact: true,
  variant: "reverse"
}) }}
```

### reverse striped

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Name",
      href: "#",
      sort: "descending",
      width: "one-half"
    },
    {
      text: "Last log in",
      href: "#",
      sort: true,
      align: "right",
      width: "one-third",
      classes: "nhsuk-u-nowrap"
    },
    {
      visuallyHiddenText: "Action"
    }
  ],
  rows: [
    [
      {
        text: "Zadie Munroe"
      },
      {
        text: "7 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Zadie Munroe"
      }
    ],
    [
      {
        text: "Yolanda Pierce"
      },
      {
        text: "13 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Yolanda Pierce"
      }
    ],
    [
      {
        text: "Xanthe Beaumont"
      },
      {
        text: "19 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Xanthe Beaumont"
      }
    ],
    [
      {
        text: "Wendell Shaw"
      },
      {
        text: "25 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Wendell Shaw"
      }
    ],
    [
      {
        text: "Val Cruz"
      },
      {
        text: "1 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Val Cruz"
      }
    ],
    [
      {
        text: "Uta Brennan"
      },
      {
        text: "7 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Uta Brennan"
      }
    ],
    [
      {
        text: "Tamsin Foley-Whitworth"
      },
      {
        text: "14 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Tamsin Foley-Whitworth"
      }
    ],
    [
      {
        text: "Stellan Park"
      },
      {
        text: "20 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Stellan Park"
      }
    ],
    [
      {
        text: "Ro Nkosi"
      },
      {
        text: "28 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Ro Nkosi"
      }
    ],
    [
      {
        text: "Reuben Tate"
      },
      {
        text: "1 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Reuben Tate"
      }
    ]
  ],
  striped: true,
  variant: "reverse"
}) }}
```

### reverse striped compact

```njk
{{ table({
  caption: "Appointments",
  firstCellIsHeader: true,
  head: [
    {
      text: "Name",
      href: "#",
      sort: "descending",
      width: "one-half"
    },
    {
      text: "Last log in",
      href: "#",
      sort: true,
      align: "right",
      width: "one-third",
      classes: "nhsuk-u-nowrap"
    },
    {
      visuallyHiddenText: "Action"
    }
  ],
  rows: [
    [
      {
        text: "Zadie Munroe"
      },
      {
        text: "7 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Zadie Munroe"
      }
    ],
    [
      {
        text: "Yolanda Pierce"
      },
      {
        text: "13 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Yolanda Pierce"
      }
    ],
    [
      {
        text: "Xanthe Beaumont"
      },
      {
        text: "19 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Xanthe Beaumont"
      }
    ],
    [
      {
        text: "Wendell Shaw"
      },
      {
        text: "25 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Wendell Shaw"
      }
    ],
    [
      {
        text: "Val Cruz"
      },
      {
        text: "1 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Val Cruz"
      }
    ],
    [
      {
        text: "Uta Brennan"
      },
      {
        text: "7 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Uta Brennan"
      }
    ],
    [
      {
        text: "Tamsin Foley-Whitworth"
      },
      {
        text: "14 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Tamsin Foley-Whitworth"
      }
    ],
    [
      {
        text: "Stellan Park"
      },
      {
        text: "20 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Stellan Park"
      }
    ],
    [
      {
        text: "Ro Nkosi"
      },
      {
        text: "28 June 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Ro Nkosi"
      }
    ],
    [
      {
        text: "Reuben Tate"
      },
      {
        text: "1 May 2026"
      },
      {
        href: "#",
        text: "Change",
        visuallyHiddenText: "details for Reuben Tate"
      }
    ]
  ],
  compact: true,
  striped: true,
  variant: "reverse"
}) }}
```

## sortable with numeric format

### striped

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "New charge",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "£114.50"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ],
  striped: true
}) }}
```

## sortable with numeric format and missing data

### striped

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    },
    {
      text: "New charge",
      format: "numeric",
      sort: true,
      sortNext: "descending"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "No data",
        format: "string",
        classes: "nhsuk-u-secondary-text-colour"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ],
  striped: true
}) }}
```

## with 0 rows

### responsive

```njk
{{ table({
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [],
  responsive: true
}) }}
```

## with 1 row

### responsive

```njk
{{ table({
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        text: "Blisters on lips or around the mouth"
      },
      {
        text: "Cold sores"
      }
    ]
  ],
  responsive: true
}) }}
```

## with 2 rows

### responsive

```njk
{{ table({
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        text: "Blisters on lips or around the mouth"
      },
      {
        text: "Cold sores"
      }
    ],
    [
      {
        text: "Itchy, dry, cracked, sore"
      },
      {
        text: "Eczema"
      }
    ]
  ],
  responsive: true
}) }}
```

## with column widths

### compact

```njk
{{ table({
  caption: {
    text: "Ibuprofen 100mg/5ml liquid dosages for children by age",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Age",
      width: "one-third"
    },
    {
      text: "How much?",
      width: "one-quarter"
    },
    {
      text: "How often?"
    }
  ],
  rows: [
    [
      {
        html: "3 to 5 months (weighing more than 5kg)"
      },
      {
        text: "2.5ml (50mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "6 to 11 months"
      },
      {
        text: "2.5ml (50mg)"
      },
      {
        text: "Max 3 to 4 times in 24 hours"
      }
    ],
    [
      {
        text: "1 to 3 years"
      },
      {
        text: "5ml (100mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "4 to 6 years"
      },
      {
        text: "7.5ml (150mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "7 to 9 years"
      },
      {
        text: "10ml (200mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "10 to 11 years"
      },
      {
        text: "15ml (300mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ]
  ],
  compact: true
}) }}
```

### striped

```njk
{{ table({
  caption: {
    text: "Ibuprofen 100mg/5ml liquid dosages for children by age",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Age",
      width: "one-third"
    },
    {
      text: "How much?",
      width: "one-quarter"
    },
    {
      text: "How often?"
    }
  ],
  rows: [
    [
      {
        html: "3 to 5 months (weighing more than 5kg)"
      },
      {
        text: "2.5ml (50mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "6 to 11 months"
      },
      {
        text: "2.5ml (50mg)"
      },
      {
        text: "Max 3 to 4 times in 24 hours"
      }
    ],
    [
      {
        text: "1 to 3 years"
      },
      {
        text: "5ml (100mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "4 to 6 years"
      },
      {
        text: "7.5ml (150mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "7 to 9 years"
      },
      {
        text: "10ml (200mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "10 to 11 years"
      },
      {
        text: "15ml (300mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ]
  ],
  striped: true
}) }}
```

### striped compact

```njk
{{ table({
  caption: {
    text: "Ibuprofen 100mg/5ml liquid dosages for children by age",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Age",
      width: "one-third"
    },
    {
      text: "How much?",
      width: "one-quarter"
    },
    {
      text: "How often?"
    }
  ],
  rows: [
    [
      {
        html: "3 to 5 months (weighing more than 5kg)"
      },
      {
        text: "2.5ml (50mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "6 to 11 months"
      },
      {
        text: "2.5ml (50mg)"
      },
      {
        text: "Max 3 to 4 times in 24 hours"
      }
    ],
    [
      {
        text: "1 to 3 years"
      },
      {
        text: "5ml (100mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "4 to 6 years"
      },
      {
        text: "7.5ml (150mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "7 to 9 years"
      },
      {
        text: "10ml (200mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "10 to 11 years"
      },
      {
        text: "15ml (300mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ]
  ],
  compact: true,
  striped: true
}) }}
```

### responsive

```njk
{{ table({
  caption: {
    text: "Ibuprofen 100mg/5ml liquid dosages for children by age",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Age",
      width: "one-third"
    },
    {
      text: "How much?",
      width: "one-quarter"
    },
    {
      text: "How often?"
    }
  ],
  rows: [
    [
      {
        html: "3 to 5 months (weighing more than 5kg)"
      },
      {
        text: "2.5ml (50mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "6 to 11 months"
      },
      {
        text: "2.5ml (50mg)"
      },
      {
        text: "Max 3 to 4 times in 24 hours"
      }
    ],
    [
      {
        text: "1 to 3 years"
      },
      {
        text: "5ml (100mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "4 to 6 years"
      },
      {
        text: "7.5ml (150mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "7 to 9 years"
      },
      {
        text: "10ml (200mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "10 to 11 years"
      },
      {
        text: "15ml (300mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ]
  ],
  responsive: true
}) }}
```

### responsive compact

```njk
{{ table({
  caption: {
    text: "Ibuprofen 100mg/5ml liquid dosages for children by age",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Age",
      width: "one-third"
    },
    {
      text: "How much?",
      width: "one-quarter"
    },
    {
      text: "How often?"
    }
  ],
  rows: [
    [
      {
        html: "3 to 5 months (weighing more than 5kg)"
      },
      {
        text: "2.5ml (50mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "6 to 11 months"
      },
      {
        text: "2.5ml (50mg)"
      },
      {
        text: "Max 3 to 4 times in 24 hours"
      }
    ],
    [
      {
        text: "1 to 3 years"
      },
      {
        text: "5ml (100mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "4 to 6 years"
      },
      {
        text: "7.5ml (150mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "7 to 9 years"
      },
      {
        text: "10ml (200mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "10 to 11 years"
      },
      {
        text: "15ml (300mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ]
  ],
  compact: true,
  responsive: true
}) }}
```

### responsive striped

```njk
{{ table({
  caption: {
    text: "Ibuprofen 100mg/5ml liquid dosages for children by age",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Age",
      width: "one-third"
    },
    {
      text: "How much?",
      width: "one-quarter"
    },
    {
      text: "How often?"
    }
  ],
  rows: [
    [
      {
        html: "3 to 5 months (weighing more than 5kg)"
      },
      {
        text: "2.5ml (50mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "6 to 11 months"
      },
      {
        text: "2.5ml (50mg)"
      },
      {
        text: "Max 3 to 4 times in 24 hours"
      }
    ],
    [
      {
        text: "1 to 3 years"
      },
      {
        text: "5ml (100mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "4 to 6 years"
      },
      {
        text: "7.5ml (150mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "7 to 9 years"
      },
      {
        text: "10ml (200mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "10 to 11 years"
      },
      {
        text: "15ml (300mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ]
  ],
  responsive: true,
  striped: true
}) }}
```

### responsive striped compact

```njk
{{ table({
  caption: {
    text: "Ibuprofen 100mg/5ml liquid dosages for children by age",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Age",
      width: "one-third"
    },
    {
      text: "How much?",
      width: "one-quarter"
    },
    {
      text: "How often?"
    }
  ],
  rows: [
    [
      {
        html: "3 to 5 months (weighing more than 5kg)"
      },
      {
        text: "2.5ml (50mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "6 to 11 months"
      },
      {
        text: "2.5ml (50mg)"
      },
      {
        text: "Max 3 to 4 times in 24 hours"
      }
    ],
    [
      {
        text: "1 to 3 years"
      },
      {
        text: "5ml (100mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "4 to 6 years"
      },
      {
        text: "7.5ml (150mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "7 to 9 years"
      },
      {
        text: "10ml (200mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "10 to 11 years"
      },
      {
        text: "15ml (300mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ]
  ],
  compact: true,
  responsive: true,
  striped: true
}) }}
```

### reverse

```njk
{{ table({
  caption: {
    text: "Ibuprofen 100mg/5ml liquid dosages for children by age",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Age",
      width: "one-third"
    },
    {
      text: "How much?",
      width: "one-quarter"
    },
    {
      text: "How often?"
    }
  ],
  rows: [
    [
      {
        html: "3 to 5 months (weighing more than 5kg)"
      },
      {
        text: "2.5ml (50mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "6 to 11 months"
      },
      {
        text: "2.5ml (50mg)"
      },
      {
        text: "Max 3 to 4 times in 24 hours"
      }
    ],
    [
      {
        text: "1 to 3 years"
      },
      {
        text: "5ml (100mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "4 to 6 years"
      },
      {
        text: "7.5ml (150mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "7 to 9 years"
      },
      {
        text: "10ml (200mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "10 to 11 years"
      },
      {
        text: "15ml (300mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ]
  ],
  variant: "reverse"
}) }}
```

### reverse compact

```njk
{{ table({
  caption: {
    text: "Ibuprofen 100mg/5ml liquid dosages for children by age",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Age",
      width: "one-third"
    },
    {
      text: "How much?",
      width: "one-quarter"
    },
    {
      text: "How often?"
    }
  ],
  rows: [
    [
      {
        html: "3 to 5 months (weighing more than 5kg)"
      },
      {
        text: "2.5ml (50mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "6 to 11 months"
      },
      {
        text: "2.5ml (50mg)"
      },
      {
        text: "Max 3 to 4 times in 24 hours"
      }
    ],
    [
      {
        text: "1 to 3 years"
      },
      {
        text: "5ml (100mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "4 to 6 years"
      },
      {
        text: "7.5ml (150mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "7 to 9 years"
      },
      {
        text: "10ml (200mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "10 to 11 years"
      },
      {
        text: "15ml (300mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ]
  ],
  compact: true,
  variant: "reverse"
}) }}
```

### reverse striped

```njk
{{ table({
  caption: {
    text: "Ibuprofen 100mg/5ml liquid dosages for children by age",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Age",
      width: "one-third"
    },
    {
      text: "How much?",
      width: "one-quarter"
    },
    {
      text: "How often?"
    }
  ],
  rows: [
    [
      {
        html: "3 to 5 months (weighing more than 5kg)"
      },
      {
        text: "2.5ml (50mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "6 to 11 months"
      },
      {
        text: "2.5ml (50mg)"
      },
      {
        text: "Max 3 to 4 times in 24 hours"
      }
    ],
    [
      {
        text: "1 to 3 years"
      },
      {
        text: "5ml (100mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "4 to 6 years"
      },
      {
        text: "7.5ml (150mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "7 to 9 years"
      },
      {
        text: "10ml (200mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "10 to 11 years"
      },
      {
        text: "15ml (300mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ]
  ],
  striped: true,
  variant: "reverse"
}) }}
```

### reverse striped compact

```njk
{{ table({
  caption: {
    text: "Ibuprofen 100mg/5ml liquid dosages for children by age",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Age",
      width: "one-third"
    },
    {
      text: "How much?",
      width: "one-quarter"
    },
    {
      text: "How often?"
    }
  ],
  rows: [
    [
      {
        html: "3 to 5 months (weighing more than 5kg)"
      },
      {
        text: "2.5ml (50mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "6 to 11 months"
      },
      {
        text: "2.5ml (50mg)"
      },
      {
        text: "Max 3 to 4 times in 24 hours"
      }
    ],
    [
      {
        text: "1 to 3 years"
      },
      {
        text: "5ml (100mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "4 to 6 years"
      },
      {
        text: "7.5ml (150mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "7 to 9 years"
      },
      {
        text: "10ml (200mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ],
    [
      {
        text: "10 to 11 years"
      },
      {
        text: "15ml (300mg)"
      },
      {
        text: "Max 3 times in 24 hours"
      }
    ]
  ],
  compact: true,
  striped: true,
  variant: "reverse"
}) }}
```

## with numeric format

### compact

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric"
    },
    {
      text: "New charge",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "£114.50"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ],
  compact: true
}) }}
```

### striped

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric"
    },
    {
      text: "New charge",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "£114.50"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ],
  striped: true
}) }}
```

### striped compact

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric"
    },
    {
      text: "New charge",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "£114.50"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ],
  compact: true,
  striped: true
}) }}
```

### responsive

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric"
    },
    {
      text: "New charge",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "£114.50"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ],
  responsive: true
}) }}
```

### responsive compact

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric"
    },
    {
      text: "New charge",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "£114.50"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ],
  compact: true,
  responsive: true
}) }}
```

### responsive striped

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric"
    },
    {
      text: "New charge",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "£114.50"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ],
  responsive: true,
  striped: true
}) }}
```

### responsive striped compact

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric"
    },
    {
      text: "New charge",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "£114.50"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ],
  compact: true,
  responsive: true,
  striped: true
}) }}
```

### reverse

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric"
    },
    {
      text: "New charge",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "£114.50"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ],
  variant: "reverse"
}) }}
```

### reverse compact

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric"
    },
    {
      text: "New charge",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "£114.50"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ],
  compact: true,
  variant: "reverse"
}) }}
```

### reverse striped

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric"
    },
    {
      text: "New charge",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "£114.50"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ],
  striped: true,
  variant: "reverse"
}) }}
```

### reverse striped compact

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric"
    },
    {
      text: "New charge",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "£114.50"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ],
  compact: true,
  striped: true,
  variant: "reverse"
}) }}
```

## with numeric format and missing data

### compact

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric"
    },
    {
      text: "New charge",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "No data",
        format: "string",
        classes: "nhsuk-u-secondary-text-colour"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ],
  compact: true
}) }}
```

### striped

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric"
    },
    {
      text: "New charge",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "No data",
        format: "string",
        classes: "nhsuk-u-secondary-text-colour"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ],
  striped: true
}) }}
```

### striped compact

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric"
    },
    {
      text: "New charge",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "No data",
        format: "string",
        classes: "nhsuk-u-secondary-text-colour"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ],
  compact: true,
  striped: true
}) }}
```

### responsive

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric"
    },
    {
      text: "New charge",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "No data",
        format: "string",
        classes: "nhsuk-u-secondary-text-colour"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ],
  responsive: true
}) }}
```

### responsive compact

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric"
    },
    {
      text: "New charge",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "No data",
        format: "string",
        classes: "nhsuk-u-secondary-text-colour"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ],
  compact: true,
  responsive: true
}) }}
```

### responsive striped

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric"
    },
    {
      text: "New charge",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "No data",
        format: "string",
        classes: "nhsuk-u-secondary-text-colour"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ],
  responsive: true,
  striped: true
}) }}
```

### responsive striped compact

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric"
    },
    {
      text: "New charge",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "No data",
        format: "string",
        classes: "nhsuk-u-secondary-text-colour"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ],
  compact: true,
  responsive: true,
  striped: true
}) }}
```

### reverse

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric"
    },
    {
      text: "New charge",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "No data",
        format: "string",
        classes: "nhsuk-u-secondary-text-colour"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ],
  variant: "reverse"
}) }}
```

### reverse compact

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric"
    },
    {
      text: "New charge",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "No data",
        format: "string",
        classes: "nhsuk-u-secondary-text-colour"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ],
  compact: true,
  variant: "reverse"
}) }}
```

### reverse striped

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric"
    },
    {
      text: "New charge",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "No data",
        format: "string",
        classes: "nhsuk-u-secondary-text-colour"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ],
  striped: true,
  variant: "reverse"
}) }}
```

### reverse striped compact

```njk
{{ table({
  caption: {
    text: "Prescription prepayment certificate (PPC) charges",
    size: "m"
  },
  firstCellIsHeader: true,
  head: [
    {
      text: "Item"
    },
    {
      text: "Current charge",
      format: "numeric"
    },
    {
      text: "New charge",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "3-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£31.25"
      },
      {
        text: "£32.05"
      }
    ],
    [
      {
        text: "12-month",
        classes: "nhsuk-u-nowrap"
      },
      {
        text: "£111.60"
      },
      {
        text: "No data",
        format: "string",
        classes: "nhsuk-u-secondary-text-colour"
      }
    ],
    [
      {
        text: "HRT"
      },
      {
        text: "£19.30"
      },
      {
        text: "£19.80"
      }
    ]
  ],
  compact: true,
  striped: true,
  variant: "reverse"
}) }}
```

## without border

### compact

```njk
{{ table({
  caption: {
    visuallyHiddenText: "Cases per manager"
  },
  border: false,
  head: [
    {
      text: "Manager"
    },
    {
      text: "Cases",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      }
    ]
  ],
  compact: true
}) }}
```

### striped

```njk
{{ table({
  caption: {
    visuallyHiddenText: "Cases per manager"
  },
  border: false,
  head: [
    {
      text: "Manager"
    },
    {
      text: "Cases",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      }
    ]
  ],
  striped: true
}) }}
```

### striped compact

```njk
{{ table({
  caption: {
    visuallyHiddenText: "Cases per manager"
  },
  border: false,
  head: [
    {
      text: "Manager"
    },
    {
      text: "Cases",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      }
    ]
  ],
  compact: true,
  striped: true
}) }}
```

### responsive

```njk
{{ table({
  caption: {
    visuallyHiddenText: "Cases per manager"
  },
  border: false,
  head: [
    {
      text: "Manager"
    },
    {
      text: "Cases",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      }
    ]
  ],
  responsive: true
}) }}
```

### responsive compact

```njk
{{ table({
  caption: {
    visuallyHiddenText: "Cases per manager"
  },
  border: false,
  head: [
    {
      text: "Manager"
    },
    {
      text: "Cases",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      }
    ]
  ],
  compact: true,
  responsive: true
}) }}
```

### responsive striped

```njk
{{ table({
  caption: {
    visuallyHiddenText: "Cases per manager"
  },
  border: false,
  head: [
    {
      text: "Manager"
    },
    {
      text: "Cases",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      }
    ]
  ],
  responsive: true,
  striped: true
}) }}
```

### responsive striped compact

```njk
{{ table({
  caption: {
    visuallyHiddenText: "Cases per manager"
  },
  border: false,
  head: [
    {
      text: "Manager"
    },
    {
      text: "Cases",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      }
    ]
  ],
  compact: true,
  responsive: true,
  striped: true
}) }}
```

### reverse

```njk
{{ table({
  caption: {
    visuallyHiddenText: "Cases per manager"
  },
  border: false,
  head: [
    {
      text: "Manager"
    },
    {
      text: "Cases",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      }
    ]
  ],
  variant: "reverse"
}) }}
```

### reverse compact

```njk
{{ table({
  caption: {
    visuallyHiddenText: "Cases per manager"
  },
  border: false,
  head: [
    {
      text: "Manager"
    },
    {
      text: "Cases",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      }
    ]
  ],
  compact: true,
  variant: "reverse"
}) }}
```

### reverse striped

```njk
{{ table({
  caption: {
    visuallyHiddenText: "Cases per manager"
  },
  border: false,
  head: [
    {
      text: "Manager"
    },
    {
      text: "Cases",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      }
    ]
  ],
  striped: true,
  variant: "reverse"
}) }}
```

### reverse striped compact

```njk
{{ table({
  caption: {
    visuallyHiddenText: "Cases per manager"
  },
  border: false,
  head: [
    {
      text: "Manager"
    },
    {
      text: "Cases",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      }
    ]
  ],
  compact: true,
  striped: true,
  variant: "reverse"
}) }}
```

## without last row border

### compact

```njk
{{ table({
  caption: {
    visuallyHiddenText: "Cases per manager"
  },
  lastRowBorder: false,
  head: [
    {
      text: "Manager"
    },
    {
      text: "Cases",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      }
    ]
  ],
  compact: true
}) }}
```

### striped

```njk
{{ table({
  caption: {
    visuallyHiddenText: "Cases per manager"
  },
  lastRowBorder: false,
  head: [
    {
      text: "Manager"
    },
    {
      text: "Cases",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      }
    ]
  ],
  striped: true
}) }}
```

### striped compact

```njk
{{ table({
  caption: {
    visuallyHiddenText: "Cases per manager"
  },
  lastRowBorder: false,
  head: [
    {
      text: "Manager"
    },
    {
      text: "Cases",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      }
    ]
  ],
  compact: true,
  striped: true
}) }}
```

### responsive

```njk
{{ table({
  caption: {
    visuallyHiddenText: "Cases per manager"
  },
  lastRowBorder: false,
  head: [
    {
      text: "Manager"
    },
    {
      text: "Cases",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      }
    ]
  ],
  responsive: true
}) }}
```

### responsive compact

```njk
{{ table({
  caption: {
    visuallyHiddenText: "Cases per manager"
  },
  lastRowBorder: false,
  head: [
    {
      text: "Manager"
    },
    {
      text: "Cases",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      }
    ]
  ],
  compact: true,
  responsive: true
}) }}
```

### responsive striped

```njk
{{ table({
  caption: {
    visuallyHiddenText: "Cases per manager"
  },
  lastRowBorder: false,
  head: [
    {
      text: "Manager"
    },
    {
      text: "Cases",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      }
    ]
  ],
  responsive: true,
  striped: true
}) }}
```

### responsive striped compact

```njk
{{ table({
  caption: {
    visuallyHiddenText: "Cases per manager"
  },
  lastRowBorder: false,
  head: [
    {
      text: "Manager"
    },
    {
      text: "Cases",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      }
    ]
  ],
  compact: true,
  responsive: true,
  striped: true
}) }}
```

### reverse

```njk
{{ table({
  caption: {
    visuallyHiddenText: "Cases per manager"
  },
  lastRowBorder: false,
  head: [
    {
      text: "Manager"
    },
    {
      text: "Cases",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      }
    ]
  ],
  variant: "reverse"
}) }}
```

### reverse compact

```njk
{{ table({
  caption: {
    visuallyHiddenText: "Cases per manager"
  },
  lastRowBorder: false,
  head: [
    {
      text: "Manager"
    },
    {
      text: "Cases",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      }
    ]
  ],
  compact: true,
  variant: "reverse"
}) }}
```

### reverse striped

```njk
{{ table({
  caption: {
    visuallyHiddenText: "Cases per manager"
  },
  lastRowBorder: false,
  head: [
    {
      text: "Manager"
    },
    {
      text: "Cases",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      }
    ]
  ],
  striped: true,
  variant: "reverse"
}) }}
```

### reverse striped compact

```njk
{{ table({
  caption: {
    visuallyHiddenText: "Cases per manager"
  },
  lastRowBorder: false,
  head: [
    {
      text: "Manager"
    },
    {
      text: "Cases",
      format: "numeric"
    }
  ],
  rows: [
    [
      {
        text: "David Francis"
      },
      {
        text: "1380"
      }
    ],
    [
      {
        text: "Paul Farmer"
      },
      {
        text: "1129"
      }
    ],
    [
      {
        text: "Rita Patel"
      },
      {
        text: "24"
      }
    ]
  ],
  compact: true,
  striped: true,
  variant: "reverse"
}) }}
```

## as a card

### striped

```njk
{{ table({
  card: true,
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "m"
  },
  firstCellIsHeader: true,
  lastRowBorder: false,
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        text: "Blisters on lips or around the mouth"
      },
      {
        text: "Cold sores"
      }
    ],
    [
      {
        text: "Itchy, dry, cracked, sore"
      },
      {
        text: "Eczema"
      }
    ],
    [
      {
        text: "Itchy blisters"
      },
      {
        text: "Shingles, chickenpox"
      }
    ]
  ],
  striped: true
}) }}
```

### responsive

```njk
{{ table({
  card: true,
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "m"
  },
  firstCellIsHeader: true,
  lastRowBorder: false,
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        text: "Blisters on lips or around the mouth"
      },
      {
        text: "Cold sores"
      }
    ],
    [
      {
        text: "Itchy, dry, cracked, sore"
      },
      {
        text: "Eczema"
      }
    ],
    [
      {
        text: "Itchy blisters"
      },
      {
        text: "Shingles, chickenpox"
      }
    ]
  ],
  responsive: true
}) }}
```

## as a card (feature)

### striped

```njk
{{ table({
  card: {
    heading: {
      text: "Other conditions like impetigo",
      size: "m"
    },
    variant: "feature"
  },
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "s"
  },
  firstCellIsHeader: true,
  lastRowBorder: false,
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        text: "Blisters on lips or around the mouth"
      },
      {
        text: "Cold sores"
      }
    ],
    [
      {
        text: "Itchy, dry, cracked, sore"
      },
      {
        text: "Eczema"
      }
    ],
    [
      {
        text: "Itchy blisters"
      },
      {
        text: "Shingles, chickenpox"
      }
    ]
  ],
  striped: true
}) }}
```

### responsive

```njk
{{ table({
  card: {
    heading: {
      text: "Other conditions like impetigo",
      size: "m"
    },
    variant: "feature"
  },
  caption: {
    text: "Impetigo can look similar to other skin conditions",
    size: "s"
  },
  firstCellIsHeader: true,
  lastRowBorder: false,
  head: [
    {
      text: "Skin symptoms"
    },
    {
      text: "Possible cause"
    }
  ],
  rows: [
    [
      {
        text: "Blisters on lips or around the mouth"
      },
      {
        text: "Cold sores"
      }
    ],
    [
      {
        text: "Itchy, dry, cracked, sore"
      },
      {
        text: "Eczema"
      }
    ],
    [
      {
        text: "Itchy blisters"
      },
      {
        text: "Shingles, chickenpox"
      }
    ]
  ],
  responsive: true
}) }}
```
