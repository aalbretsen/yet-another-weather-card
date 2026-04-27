import { css } from "lit";

export const cardStyles = css`
  :host {
    --yawc-cell-min-full: 94px;
    --yawc-cell-min-full-tight: 72px;
    --yawc-cell-min-compact: 110px;
    --yawc-cell-min-compact-tight: 80px;
    --yawc-divider: var(--divider-color, rgba(0, 0, 0, 0.12));
    --yawc-cell-bg: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
    --yawc-text-primary: var(--primary-text-color, #212121);
    --yawc-text-secondary: var(--secondary-text-color, #6f6f6f);
    --yawc-accent: var(--primary-color, #03a9f4);
  }

  ha-card {
    padding: 12px 12px 6px;
    color: var(--yawc-text-primary);
  }

  .header {
    position: relative;
    min-height: 48px;
  }

  .header-left,
  .header-right {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    gap: 14px;
  }

  @media (min-width: 480px) {
    .header-left,
    .header-right {
      gap: 18px;
    }
  }

  .header-left {
    left: 4px;
    z-index: 2;
    background: var(
      --ha-card-background,
      var(--card-background-color, var(--primary-background-color, #fff))
    );
    padding-right: 12px;
    max-width: calc(100% - 8px);
  }

  .header-right {
    right: 4px;
    z-index: 1;
  }

  .header-icon {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header-icon svg {
    width: 100%;
    height: 100%;
  }

  .header-info,
  .header-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 44px;
    min-width: 0;
  }

  .header-block {
    align-items: flex-end;
    text-align: right;
  }

  .header-location,
  .header-big {
    font-size: 22px;
    font-weight: 500;
    line-height: 1.1;
    letter-spacing: -0.3px;
    color: var(--yawc-text-primary);
    font-variant-numeric: tabular-nums;
  }

  .header-location {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .header-big {
    white-space: nowrap;
  }

  .header-condition,
  .header-cap {
    font-size: 13px;
    line-height: 1.1;
    color: var(--yawc-text-secondary);
    margin-top: 4px;
    min-height: 1em;
    letter-spacing: 0.2px;
  }

  .header-condition {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .header-unit,
  .header-unit-deg {
    font-weight: 400;
    color: var(--yawc-text-secondary);
    letter-spacing: 0;
  }

  .header-unit {
    font-size: 12px;
  }

  .header-unit-deg {
    font-size: 20px;
    line-height: 1;
    margin-left: 1px;
    vertical-align: top;
  }

  .section-divider {
    margin: 10px 0;
    border-top: 1px solid var(--yawc-divider);
  }

  .grid {
    display: grid;
    gap: 8px;
    padding: 0 6px;
  }

  .grid-full.labels-on {
    grid-template-columns: repeat(auto-fit, minmax(var(--yawc-cell-min-full), 1fr));
  }

  .grid-full.labels-off {
    grid-template-columns: repeat(auto-fit, minmax(var(--yawc-cell-min-full-tight), 1fr));
  }

  .grid-compact.labels-on {
    grid-template-columns: repeat(auto-fit, minmax(var(--yawc-cell-min-compact), 1fr));
    gap: 4px 8px;
  }

  .grid-compact.labels-off {
    grid-template-columns: repeat(auto-fit, minmax(var(--yawc-cell-min-compact-tight), 1fr));
    gap: 4px 8px;
  }

  .grid-cell {
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }

  .grid-full .grid-cell {
    background: var(--yawc-cell-bg);
    border-radius: 8px;
    padding: 10px 6px;
  }

  .grid-full.labels-off .grid-cell {
    padding: 8px 4px;
  }

  .grid-compact .grid-cell {
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;
    gap: 6px;
    padding: 2px 2px;
  }

  .grid-icon {
    width: 22px;
    height: 22px;
    color: var(--yawc-accent);
    margin-bottom: 4px;
    display: inline-flex;
  }

  .grid-icon svg {
    width: 100%;
    height: 100%;
  }

  .grid-compact .grid-icon {
    width: 18px;
    height: 18px;
    margin-bottom: 0;
  }

  .grid-value {
    font-size: 13px;
    font-weight: 500;
    color: var(--yawc-text-primary);
    white-space: nowrap;
  }

  .grid-label {
    font-size: 10px;
    color: var(--yawc-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 2px;
  }

  .grid-compact .grid-label {
    font-size: 11px;
    text-transform: none;
    letter-spacing: 0;
    margin-top: 0;
    margin-left: 1px;
  }

  .forecast {
    display: grid;
    grid-template-columns: repeat(var(--forecast-cols, 5), 1fr);
    gap: 4px;
  }

  .forecast-empty {
    color: var(--yawc-text-secondary);
    font-size: 12px;
    text-align: center;
    padding: 12px;
  }

  .forecast-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    padding: 4px 2px;
  }

  .forecast-heading {
    font-size: 11px;
    color: var(--yawc-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-variant-numeric: tabular-nums;
  }

  .forecast-icon {
    width: 32px;
    height: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .forecast-icon svg {
    width: 100%;
    height: 100%;
  }

  .forecast-temps {
    font-size: 13px;
    color: var(--yawc-text-primary);
    font-variant-numeric: tabular-nums;
  }

  .forecast-temps .lo {
    color: var(--yawc-text-secondary);
    font-size: 12px;
  }

  .forecast-row {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 11px;
    color: var(--yawc-text-primary);
    font-variant-numeric: tabular-nums;
  }

  .forecast-row svg,
  .forecast-row .dial {
    width: 13px;
    height: 13px;
    color: var(--yawc-text-secondary);
    flex-shrink: 0;
    display: inline-flex;
  }

  .forecast-row .dial svg {
    width: 100%;
    height: 100%;
  }

  .missing {
    color: var(--error-color, #db4437);
    padding: 8px;
    font-size: 13px;
  }
`;
