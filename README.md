# FlipCard

A minimal, accessible 3D flip card component for Next.js.

Click to flip — smooth CSS 3D rotation, hover tilt, keyboard accessible. No dependencies beyond Next.js and Tailwind CSS.

Originally built for a membership card in a production system. Extracted as a reusable standalone component.

---

## Demo

Open `demo/index.html` in any browser — no setup required.

---

## Features

- 3D flip animation on click
- Subtle hover tilt effect
- Keyboard accessible — `Enter` or `Space` to flip
- ARIA attributes for screen readers
- Responsive width out of the box
- Configurable aspect ratio — defaults to standard card ratio (`2042/1316`)
- Uses Next.js `<Image>` for optimized loading

---

## Requirements

- Next.js 13+ (App Router)
- Tailwind CSS

---

## Installation

Copy `FlipCard.tsx` into your project — e.g. `components/FlipCard.tsx`.

---

## Usage

```tsx
import { FlipCard } from "@/components/FlipCard";

<FlipCard
  frontImage="/images/card-front.webp"
  backImage="/images/card-back.webp"
  frontAlt="Membership card front"
  backAlt="Membership card back"
  hint="Click to flip"
/>
```

---

## Props

| Prop          | Type     | Default           | Description                                       |
|---------------|----------|-------------------|---------------------------------------------------|
| `frontImage`  | `string` | —                 | Path or URL to the front image (required)         |
| `backImage`   | `string` | —                 | Path or URL to the back image (required)          |
| `frontAlt`    | `string` | `"Card front"`    | Alt text for the front image                      |
| `backAlt`     | `string` | `"Card back"`     | Alt text for the back image                       |
| `aspectRatio` | `string` | `"2042/1316"`     | CSS `aspect-ratio` value                          |
| `hint`        | `string` | `"Click to flip"` | Label shown below the card — set to `""` to hide |

---

## Customization

The card width is responsive by default (`280px` → `480px`). To override, wrap in your own container:

```tsx
<div className="w-72">
  <FlipCard frontImage="..." backImage="..." />
</div>
```

---

## Demo images

Demo SVG cards are included in `demo/` — replace with your own images.

---

## License

MIT © [Benjamin Flassig](https://github.com/BFlassig)
