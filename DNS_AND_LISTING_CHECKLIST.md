# DNS and marketplace checklist for jolter.ai

## 1) Point jolter.ai at GitHub Pages

In NameCheap > Domain List > jolter.ai > Manage > Advanced DNS, add/update:

A records for apex/root:
- Type: A Record | Host: @ | Value: 185.199.108.153 | TTL: Automatic
- Type: A Record | Host: @ | Value: 185.199.109.153 | TTL: Automatic
- Type: A Record | Host: @ | Value: 185.199.110.153 | TTL: Automatic
- Type: A Record | Host: @ | Value: 185.199.111.153 | TTL: Automatic

CNAME for www:
- Type: CNAME Record | Host: www | Value: Troywcobb.github.io | TTL: Automatic

Optional IPv6 AAAA records:
- Type: AAAA Record | Host: @ | Value: 2606:50c0:8000::153 | TTL: Automatic
- Type: AAAA Record | Host: @ | Value: 2606:50c0:8001::153 | TTL: Automatic
- Type: AAAA Record | Host: @ | Value: 2606:50c0:8002::153 | TTL: Automatic
- Type: AAAA Record | Host: @ | Value: 2606:50c0:8003::153 | TTL: Automatic

After DNS resolves, enable GitHub Pages HTTPS enforcement for the repo.

## 2) Configure offer email

Create/confirm forwarding for:

domain-offers@jolter.ai

Recommended target: your preferred inbox.

The landing page already uses this address in the Make Offer buttons.

## 3) Marketplace listings

List with this pricing:

- BIN: $49,500
- Minimum offer: $25,000
- Transaction: escrow / marketplace escrow

Recommended marketplaces:

1. Afternic
   - Best distribution.
   - Add jolter.ai.
   - Set Buy Now $49,500.
   - Set floor/minimum offer $25,000 if available.
   - If using Afternic landers, decide whether to replace GitHub Pages DNS with Afternic nameservers/lander records.

2. Sedo
   - Add jolter.ai.
   - Verify ownership via DNS TXT if prompted.
   - Set Buy Now $49,500.
   - Set Make Offer enabled.

3. NameCheap Marketplace
   - Use as secondary listing if available.
   - Same BIN/minimum pricing.

## 4) Transfer rule

Do not unlock the domain or share EPP/auth code until funds are secured by escrow/marketplace.
