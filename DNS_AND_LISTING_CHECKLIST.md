# DNS and marketplace checklist for jolter.ai

## 1) Railway deployment and DNS

Current Railway deployment:

- Project: `jolter.ai-sale`
- Project ID: `655f577a-47b5-4d00-8b94-1693e550548e`
- Service: `jolter.ai-sale`
- Service ID: `6e40e295-f584-4b34-a791-9dd68ab3a2fd`
- Environment: `production`
- Deployment ID: `ff00d2e9-6236-403d-8a09-84fa9bbf2600`
- Verified Railway URL: https://jolterai-sale-production.up.railway.app
- Verification: HTTP 200; hero sale headline, `FOR SALE NOW`, `$49,500`, and `Troywcobb@gmail.com` present.

To point `jolter.ai` at Railway:

1. Railway dashboard > project `jolter.ai-sale` > service `jolter.ai-sale` > Settings > Networking/Domains.
2. Add custom domain `jolter.ai`.
3. Copy Railway's required DNS record(s).
4. NameCheap > Domain List > `jolter.ai` > Manage > Advanced DNS.
5. Add/replace the exact Railway DNS record(s).
6. Wait for Railway domain verification, then test `https://jolter.ai`.

Note: Railway CLI deployment/status auth worked, but CLI custom-domain creation returned `Unauthorized. Please run railway login again.` Add the custom domain in the dashboard if the CLI remains blocked.

## 2) Offer email

The landing page Make Offer buttons send directly to:

Troywcobb@gmail.com

No domain email forwarding is required for the CTA.

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
