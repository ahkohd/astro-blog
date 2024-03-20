{
  description = "A flake for Astro";
  inputs = {
    nixpkgs.url = "nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
  };
  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };

        packages = with pkgs; [
          nodejs_20

          nodePackages.pnpm
        ];

      in {

        devShells.default = pkgs.mkShell {
          buildInputs = packages;
          shellHook = with pkgs; ''
            echo "🔮 Welcome to Astro development environment!"
          '';
        };
      });
}

