/**
 * Mapas de assets (logos e techs) por chave.
 * Usados para resolver logoKey e techKeys dos dados de carreira.
 */

import type { StaticImageData } from 'next/image';

// Logos de empresas/instituições 
import bridgeLogo from '../../public/bridge.png';
import cigamLogo from '../../public/cigam.png';
import brainnyLogo from '../../public/brainny.png';
import senacLogo from '../../public/senac.jpg';
import ufpelLogo from '../../public/ufpel.png';
import fiapLogo from '../../public/fiap.png';

// Techs
import rnLogo from '../../public/react_native.png';
import jsLogo from '../../public/js.png';
import tsLogo from '../../public/ts.png';
import nextJsLogo from '../../public/nextjs.png';
import nestJsLogo from '../../public/nestjs.png';
import nodeLogo from '../../public/node.png';
import graphqlLogo from '../../public/graphql.png';
import dockerLogo from '../../public/docker.png';

export const logoMap: Record<string, StaticImageData> = {
  cigam: cigamLogo as StaticImageData,
  bridge: bridgeLogo as StaticImageData,
  brainny: brainnyLogo as StaticImageData,
  senac: senacLogo as StaticImageData,
  ufpel: ufpelLogo as StaticImageData,
  fiap: fiapLogo as StaticImageData,
};

export const techMap: Record<string, StaticImageData> = {
  react: rnLogo as StaticImageData,
  react_native: rnLogo as StaticImageData,
  js: jsLogo as StaticImageData,
  ts: tsLogo as StaticImageData,
  nextjs: nextJsLogo as StaticImageData,
  nestjs: nestJsLogo as StaticImageData,
  node: nodeLogo as StaticImageData,
  graphql: graphqlLogo as StaticImageData,
  docker: dockerLogo as StaticImageData,
};
