import * as React from "react"
export const PortfolioSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={395.919}
    height={122}
    preserveAspectRatio="xMidYMid"
    style={{
      background: "0 0",
    }}
    viewBox="52.041 14 395.919 122"
    {...props}
  >
    <defs>
      <filter
        id="editing-reflect"
        width="300%"
        height="300%"
        x="-100%"
        y="-100%"
        primitiveUnits="objectBoundingBox"
      >
        <feFlood floodColor="#704601" result="flood" />
        <feComposite
          in="flood"
          in2="SourceAlpha"
          operator="in"
          result="flood-in"
        />
        <feImage
          xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNzYuNDEwODU4MTU0Mjk2OXB4IiBoZWlnaHQ9Ijc1cHgiIHZpZXdCb3g9IjAgMCAyNzYuNDEwODU4MTU0Mjk2OSA3NSI+CjxkZWZzPgogIDxsaW5lYXJHcmFkaWVudCBpZD0icmVmbGVjdC1ncmFkaWVudCIgeDE9IjAiIHgyPSIwIiB5MT0iMCIgeTI9IjEiPgogICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmNGI3IiBzdG9wLW9wYWNpdHk9IjAuMCIvPgogICAgPHN0b3Agb2Zmc2V0PSIwLjMiIHN0b3AtY29sb3I9IiNmZmY0YjciIHN0b3Atb3BhY2l0eT0iMC4wIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmY0YjciIHN0b3Atb3BhY2l0eT0iMC45Ii8+CiAgPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8cGF0aCBkPSJNMCAwIEwwIDMzLjc1IFExMzguMjA1NDI5MDc3MTQ4NDQgNDguNzUgMjc2LjQxMDg1ODE1NDI5NjkgMzMuNzUgTDI3Ni40MTA4NTgxNTQyOTY5IDAgWiIgZmlsbD0idXJsKCNyZWZsZWN0LWdyYWRpZW50KSIvPgo8L3N2Zz4="
          width="100%"
          height="100%"
          x={0}
          y={0}
          preserveAspectRatio="none"
          result="image"
        />
        <feComposite
          in="image"
          in2="SourceAlpha"
          operator="in"
          result="image-in"
        />
        <feGaussianBlur in="flood-in" result="blur" stdDeviation="0.003 0.03" />
        <feOffset dy={0.03} in="blur" result="offset" />
        <feComponentTransfer in="offset" result="comp">
          <feFuncA slope={0.5} type="linear" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode in="comp" />
          <feMergeNode in="SourceGraphic" />
          <feMergeNode in="image-in" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#editing-reflect)">
      <path
        fill="#f79651"
        d="M139.02 56.31q15.68 0 15.68 11.07 0 6.08-3.9 9.73-3.84 3.65-10.56 3.65-3.14 0-5.57-1.79-1.15-.77-1.92-1.79 4.67 0 7.14-2.85 2.46-2.85 2.46-8.42t-5.5-5.57h-1.54q-.38 0-.7.07L127.25 99h-13.89l7.87-41.92q6.85-.64 10.82-.7 3.96-.07 6.97-.07Zm29.95 43.97q-14.08 0-14.08-13.25 0-9.41 5.19-15.49 5.5-6.46 15.04-6.46 6.91 0 10.43 3.2 3.52 3.2 3.52 9.92 0 10.24-5.5 16.19-5.38 5.89-14.6 5.89Zm1.67-27.84q-.77 1.73-1.38 4.32-.61 2.59-1.37 6.69-.77 4.09-.77 9.15 0 1.66.54 2.75.55 1.09 2.02 1.09t2.4-.7q.93-.71 1.63-2.37 1.28-2.95 2.3-8.42 1.03-5.47 1.12-7.84.1-2.37.1-4.13 0-1.76-.51-2.91-.51-1.15-1.95-1.15t-2.4.9q-.96.89-1.73 2.62Zm42.24 8.58q2.3-4.1 2.3-8.26 0-2.75-1.98-2.75-1.54 0-3.14 2.62-1.66 2.63-2.17 6.02L204.56 99l-13.25 1.28 6.53-33.92 10.56-1.28-1.15 6.46q3.13-6.46 10.17-6.46 3.71 0 5.73 1.92 2.02 1.92 2.02 5.86 0 3.93-2.6 6.43-2.59 2.49-7 2.49-1.92 0-2.69-.76Zm14.33 11.58q0-1.73.9-6.08l3.39-17.28h-3.77l.25-1.92q7.68-2.3 15.11-7.94h3.07l-1.54 6.98h4.99l-.57 2.88h-4.93l-3.26 17.28q-.84 3.97-.84 5.31 0 3.07 2.69 3.71-.64 2.18-2.94 3.46-2.31 1.28-5.57 1.28-3.26 0-5.12-2.05-1.86-2.05-1.86-5.63Zm47.04-30.72q.9-1.54.9-3.2 0-2.94-1.79-2.94-2.75 0-3.91 5.63l-.96 4.99h5.83l-.39 2.88h-6.01L262.16 99l-12.93 1.28 6.14-31.04h-4.54l.58-2.88h4.48l1.34-5.06q1.15-4.67 6.08-6.84 3.58-1.54 9.6-1.54t8.7 1.54q2.69 1.53 2.69 3.58t-1.6 3.33q-1.6 1.28-3.39 1.28-3.52 0-5.06-.77Zm12.93 38.4q-14.08 0-14.08-13.25 0-9.41 5.19-15.49 5.5-6.46 15.04-6.46 6.91 0 10.43 3.2 3.52 3.2 3.52 9.92 0 10.24-5.51 16.19-5.37 5.89-14.59 5.89Zm1.67-27.84q-.77 1.73-1.38 4.32-.61 2.59-1.38 6.69-.76 4.09-.76 9.15 0 1.66.54 2.75t2.02 1.09q1.47 0 2.4-.7.92-.71 1.63-2.37 1.28-2.95 2.3-8.42 1.03-5.47 1.12-7.84.1-2.37.1-4.13 0-1.76-.51-2.91-.52-1.15-1.96-1.15t-2.4.9q-.96.89-1.72 2.62Zm37.5 23.04q-1.98 4.8-8.32 4.8-3.2 0-5.25-2.24-1.66-1.86-1.66-3.97 0-4.8 2.24-15.29l4.67-24.58 12.99-1.28-6.21 32.38q-1.08 4.74-1.08 6.4 0 3.65 2.62 3.78Zm20.8 0q-1.98 4.8-8.32 4.8-3.26 0-5.31-2.24-1.73-1.98-1.73-3.97 0-5.18 2.37-15.29l2.37-12.42 12.99-1.28-3.91 20.22q-1.08 4.74-1.08 6.4 0 3.65 2.62 3.78Zm-9.47-38.02q0-2.49 2.08-3.84 2.08-1.34 5.09-1.34 3 0 4.83 1.34 1.82 1.35 1.82 3.84 0 2.5-2.01 3.78-2.02 1.28-5.03 1.28-3.01 0-4.89-1.28-1.89-1.28-1.89-3.78Zm28.86 42.82q-14.08 0-14.08-13.25 0-9.41 5.19-15.49 5.5-6.46 15.04-6.46 6.91 0 10.43 3.2 3.52 3.2 3.52 9.92 0 10.24-5.51 16.19-5.37 5.89-14.59 5.89Zm1.67-27.84q-.77 1.73-1.38 4.32-.61 2.59-1.38 6.69-.76 4.09-.76 9.15 0 1.66.54 2.75t2.02 1.09q1.47 0 2.4-.7.92-.71 1.63-2.37 1.28-2.95 2.3-8.42 1.03-5.47 1.12-7.84.1-2.37.1-4.13 0-1.76-.51-2.91-.52-1.15-1.96-1.15t-2.4.9q-.96.89-1.72 2.62Z"
      />
    </g>
    <style />
  </svg>
)
