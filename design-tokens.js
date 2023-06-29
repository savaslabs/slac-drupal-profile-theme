!function(){"use strict";var n={191:function(n){n.exports='gesso:\n  palette:\n    brand:\n      cardinal:\n        base: "#8c1515"\n        light: "#b83a4b"\n        dark: "#820000"\n      digital-red:\n        base: "#b1040e"\n        light: "#e50808"\n      lagunita:\n        base: "#007c92"\n        light: "#1aa4bc"\n        dark: "#006983"\n      sky:\n        base: "#4298b5"\n        slac: "#0099cc"\n        light: "#67afd2"\n        dark: "#016895"\n      digital-blue:\n        base: "#006CB8"\n      stormy:\n        dark: "#013948"\n      palo-verde:\n        base: "#279989"\n        light: "#59b3a9"\n        dark: "#017e7c"\n      palo-alto:\n        base: "#175e54"\n        light: "#2d716f"\n        dark: "#014240"\n      teal:\n        base: "#00505c"\n      digital-green:\n        base: "#008566"\n      bay:\n        base: "#6fa287"\n        light: "#8ab8a7"\n        light-1: "#c9ded6"\n        dark: "#4a7865"\n      sage:\n        light: "#c7d1c5"\n      lime:\n        base: "#8bc751"\n      illuminating:\n        base: "#fedd5c"\n        light: "#ffe781"\n        dark: "#fec51d"\n      poppy:\n        base: "#e98300"\n        light: "#f9a44a"\n        dark: "#d1660f"\n      spirited:\n        base: "#e04f39"\n        light: "#f4795b"\n        dark: "#c74632"\n      stone:\n        base: "#928b81"\n        light: "#d4d1d1"\n        dark: "#544948"\n      clay:\n        base: "#5f574f"\n      fog:\n        base: "#dad7cb"\n        light: "#f4f4f4"\n        dark: "#b6b1a9"\n      purple:\n        base: "#53284f"\n        light: "#665264"\n        dark: "#3d1e3a"\n      lavender:\n        base: "#765e99"\n    grayscale:\n      white: "#ffffff"\n      gray-1: "#eaeaea"\n      gray-2: "#d5d5d4"\n      gray-3: "#c0c0bf"\n      gray-4: "#ababa9"\n      gray-5: "#979694"\n      gray-6: "#767674"\n      gray-7: "#6d6c69"\n      gray-8: "#585754"\n      gray-9: "#43423e"\n      cool-gray: "#53565a"\n      stanford-black: "#2e2d29"\n      black: "#000000"\n  box-shadow:\n    "0": none\n    "1": 5px 5px 20px rgba(0, 0, 0, 0.1);\n    "2": 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)\n    "3": 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)\n    "4": 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)\n    "5": 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)\n  constrains:\n    sm: 600px\n    images: 812px\n    teaser: 1026px\n    md: 1304px\n    lg: 2200px\n  breakpoints:\n    mobile: 320px\n    mobile-lg: 480px\n    tablet: 640px\n    tablet-lg: 880px\n    desktop: 1024px\n    mobile-menu: 1099px\n    desktop-lg: 1280px\n    widescreen: 1400px\n    grid-2col: 600px\n  colors:\n    text:\n      primary: "#2e2d29"\n      secondary: "#767674"\n      on-light: "#2e2d29"\n      on-dark: "#ffffff"\n      link: "#2e2d29"\n      link-hover: "#b1040e"\n      link-active: "#b1040e"\n      link-visited: "#2e2d29"\n      link-underline: "#2e2d29"\n    background:\n      site: "#ffffff"\n      subfooter: "#8c1515"\n      dropdown-menu: "#ffffff"\n    button:\n      primary:\n        background: "#000000"\n        background-hover: "#ffffff"\n        background-active: "#ffffff"\n        border: "#000000"\n        border-hover: "#000000"\n        text: "#ffffff"\n        text-hover: "#000000"\n        text-active: "#000000"\n      secondary:\n        background: "#ffffff"\n        background-hover: transparent\n        background-active: transparent\n        border: "#ffffff"\n        border-hover: "#ffffff"\n        text: "#000000"\n        text-hover: "#ffffff"\n        text-active: "#ffffff"\n      base:\n        background: "#000000"\n        background-hover: "#ffffff"\n        background-active: "#ffffff"\n        border: "#000000"\n        border-hover: "#000000"\n        text: "#ffffff"\n        text-hover: "#000000"\n        text-active: "#000000"\n      disabled:\n        background: "#eaeaea"\n        border: "#eaeaea"\n        text: "#c0c0bf"\n      danger:\n        background: "#e50808"\n        background-hover: "#b1040e"\n        background-active: "#b1040e"\n        border: "#b1040e"\n        border-hover: "#b1040e"\n        text: "#ffffff"\n        text-hover: "#ffffff"\n        text-active: "#ffffff"\n      back-to-top:\n        background: "#2e2d29"\n        background-hover: "#000000"\n        color: "#ffffff"\n        color-hover: "#ffffff"\n    form:\n      background: "#ffffff"\n      background-active: "#ffffff"\n      background-checked: "#000000"\n      background-unchecked: "#ffffff"\n      border: "#d5d5d4"\n      border-dark: "#979694"\n      border-light: "#eaeaea"\n      thumb: "#979694"\n      track: "#c0c0bf"\n    mark:\n      background: "#fedd5c"\n      text: "#6d6c69"\n    selection:\n      background: "#2e2d29"\n      text: "#ffffff"\n    table:\n      border: "#979694"\n      background: "#ffffff"\n      background-head: "#eaeaea"\n      background-foot: "#eaeaea"\n    ui:\n      generic:\n        background: "#c0c0bf"\n        background-darker: "#2e2d29"\n        background-dark: "#767674"\n        background-light: "#eaeaea"\n        background-lighter: "#eaeaea"\n        border: "#c0c0bf"\n        border-dark: "#767674"\n        border-light: "#4298b5"\n        text-lighter: "#ffffff"\n        text-light: "#c0c0bf"\n        text-dark: "#979694"\n        text-darker: "#6d6c69"\n        accent: "#8c1515"\n        accent-dark: "#013948"\n        accent-light: "#b1040e"\n        focus: "#1aa4bc"\n      error:\n        background: "#e50808"\n        border: "#b1040e"\n      success:\n        background: "#c9ded6"\n        border: "#4a7865"\n      warning:\n        background: "#ffe781"\n        border: "#fec51d"\n  typography:\n    font-family:\n      primary:\n        name: Primary\n        stack: \'"Lato", Arial, sans-serif\'\n      secondary:\n        name: Secondary\n        stack: \'"Merriweather", Georgia, serif\'\n      system:\n        name: System\n        stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Oxygen-Sans",\n          Ubuntu, Cantarell, "Fira Sans", Droid Sans, sans-serif\n      monospace:\n        name: Monospace\n        stack: Menlo, Consolas, "Lucida Console", "Liberation Mono", "Courier New",\n          monospace, sans-serif\n    base-font-size: 16px\n    font-size:\n      "1": 14px\n      "2": 16px\n      "3": 18px\n      "4": 22px\n      "5": 26px\n      "6": 30px\n      "7": 38px\n      "8": 40px\n      "9": 42px\n      "10": 50px\n      "11": 62px\n    responsive-font-size-min-width: 360px\n    responsive-font-size-max-width: 1400px\n    responsive-font-size:\n      "1":\n        min: 14px\n        val: auto\n        max: 14px\n      "2":\n        min: 16px\n        val: auto\n        max: 16px\n      "3":\n        min: 16px\n        val: auto\n        max: 18px\n      "4":\n        min: 20px\n        val: auto\n        max: 24px\n      "5":\n        min: 22px\n        val: auto\n        max: 26px\n      "6":\n        min: 26px\n        val: auto\n        max: 30px\n      "7":\n        min: 30px\n        val: auto\n        max: 38px\n      "8":\n        min: 34px\n        val: auto\n        max: 40px\n      "9":\n        min: 18px\n        val: auto\n        max: 42px\n      "10":\n        min: 28px\n        val: auto\n        max: 42px\n      "11":\n        min: 26px\n        val: auto\n        max: 42px\n      "12":\n        min: 42px\n        val: auto\n        max: 48px\n      "13":\n        min: 42px\n        val: auto\n        max: 50px\n      "14":\n        min: 50px\n        val: auto\n        max: 62px\n    font-weight:\n      light: 300\n      regular: 400\n      semibold: 500\n      bold: 700\n      black: 900\n    line-height:\n      tight: 1.2\n      base: 1.4\n      loose: 1.8\n    display:\n      display:\n        font-family: \'"Lato", Arial, sans-serif\'\n        font-weight: 900\n        line-height: 1.2\n        responsive-font-size: 12\n      h1:\n        font-family: \'"Lato", Arial, sans-serif\'\n        font-feature-settings: "\'liga\' off"\n        font-weight: 900\n        line-height: 1.4\n        responsive-font-size: 11\n      h2:\n        font-family: \'"Lato", Arial, sans-serif\'\n        font-feature-settings: "\'liga\' off"\n        font-weight: 700\n        line-height: 1.4\n        responsive-font-size: 6\n      h3:\n        font-family: \'"Lato", Arial, sans-serif\'\n        font-feature-settings: "\'liga\' off"\n        font-weight: 700\n        line-height: 1.4\n        responsive-font-size: 5\n      h4:\n        font-family: \'"Lato", Arial, sans-serif\'\n        font-feature-settings: "\'liga\' off"\n        font-weight: 700\n        line-height: 1.4\n        responsive-font-size: 4\n      h5:\n        font-family: \'"Lato", Arial, sans-serif\'\n        font-feature-settings: "\'liga\' off"\n        font-weight: 700\n        line-height: 1.2\n        responsive-font-size: 3\n      h6:\n        font-family: \'"Lato", Arial, sans-serif\'\n        font-feature-settings: "\'liga\' off"\n        font-weight: 700\n        line-height: 1.4\n        responsive-font-size: 2\n      blockquote:\n        font-family: \'"Merriweather", Georgia, serif\'\n        font-feature-settings: "\'pnum\' on, \'lnum\' on"\n        font-weight: 700\n        line-height: 1.4\n        responsive-font-size: 5\n      body:\n        font-family: \'"Merriweather", Georgia, serif\'\n        font-feature-settings: "\'pnum\' on, \'lnum\' on"\n        font-weight: 400\n        line-height: 1.8\n        responsive-font-size: 3\n      body-large:\n        font-family: \'"Lato", Arial, sans-serif\'\n        font-feature-settings: "\'liga\' off"\n        font-weight: 400\n        line-height: 1.8\n        responsive-font-size: 4\n      body-small:\n        font-family: \'"Lato", Arial, sans-serif\'\n        font-feature-settings: "\'liga\' off"\n        font-weight: 400\n        line-height: 1.8\n        responsive-font-size: 2\n      cite:\n        font-family: \'"Lato", Arial, sans-serif\'\n        font-feature-settings: "\'liga\' off"\n        font-size: 18px\n        font-style: normal\n        font-weight: 400\n        line-height: 1.4\n  transitions:\n    ease:\n      ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)\n      ease-out: cubic-bezier(0.0, 0, 0.2, 1)\n      ease-in: cubic-bezier(0.4, 0, 1, 1)\n      sharp: cubic-bezier(0.4, 0, 0.6, 1)\n    duration:\n      shortest: 150ms\n      short: 200ms\n      standard: 375ms\n      long: 400ms\n      intro: 270ms\n      outro: 195ms\n  z-index:\n    social-share: 2\n    toc: 2\n    back-to-top: 5\n    cookie-banner: 8\n    overlay: 10\n    modal: 499\n    nav: 500\n    drawer: 501\n    lightbox: 502\n  spacing:\n    "0": 0\n    "1": 8px\n    "2": 16px\n    "3": 24px\n    "4": 32px\n    "5": 40px\n    "6": 48px\n    "7": 56px\n    "8": 64px\n    "9": 72px\n    "10": 80px\n    "12": 96px\n    "15": 120px\n    "0.5": 4px\n    "1.5": 12px\n    "2.5": 20px\n    "4.5": 36px\n  gutter-width: 40px\n  site-margins:\n    mobile: 32px\n    desktop: 32px\n'}},e={};!function a(t){var f=e[t];if(void 0!==f)return f.exports;var o=e[t]={exports:{}};return n[t](o,o.exports,a),o.exports}(191)}();