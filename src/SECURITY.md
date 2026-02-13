# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.2.x   | Yes                |
| 0.1.x   | Security fixes only|
| < 0.1   | No                 |

## Reporting a Vulnerability

If you discover a security vulnerability in this package, please report it responsibly:

1. **Do NOT** open a public GitHub issue for security vulnerabilities.
2. Email: Create a private security advisory via [GitHub Security Advisories](https://github.com/biomahd-creator/financio-design-system/security/advisories/new).
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

We will acknowledge receipt within 48 hours and provide an estimated timeline for a fix.

## Known Issues

### xlsx (transitive dependency)

**Severity:** Low
**Source:** Transitive dependency via `recharts`
**Impact:** Only used for client-side Excel export via dynamic import in `ExportData` component. Does not process external/untrusted files.
**Mitigation:** The `ExportData` component only exports user-generated data to Excel format. No file parsing of external input occurs.

## Supply Chain Security

- All releases are published with npm provenance (`--provenance` flag)
- CI/CD runs full validation (typecheck + tests + boundary check) before publish
- Version consistency is verified between `package.json` and git tag
- The `prepublishOnly` script prevents accidental publishes without validation
