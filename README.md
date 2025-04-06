# Archway

**A curated hub of solution architecture patterns and infrastructure blueprints.**

Archway helps software architects and engineers design scalable, resilient systems through proven architectural patterns and practical blueprints.

### Features
- Categorized patterns with use cases, trade-offs, and diagrams
- Implementation-ready blueprints (Terraform, CDK, Helm)
- CLI for discovering and scaffolding patterns
- Vendor-neutral and vendor-specific solutions
- Community contributions and RFC processes

### Example Pattern
- [Circuit Breaker](docs/categories/resilience/circuit-breaker.md)

### Getting Started
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd archway
2. Explore the `docs/categories` folder for patterns and blueprints.
3. Run the CLI (in dev):
    ```python
    cli/archpick.py --category resilience
    ```