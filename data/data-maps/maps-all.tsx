import IMaps from "@/interface/IMaps";
import IOfficeCards from "@/interface/IOfficeCards";
import React from 'react';

const header =
	<h1 className='h-24'>
		<span>
			<strong className='color-primary-light'>World Map</strong>
		</span>
	</h1>


const image =
<svg id="EU" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 900" className="item-map w-auto m-auto text-dark-gray relative svg-map  max-w-full duration-700 opacity-100 scale-100">
 <g className="layer">
  <g >
    <path d="m627.85,444.09l0.79,3.1l2.78,-1.55l2.38,4.4l2.58,1.81l1.19,5.95l-0.99,5.69l1.99,6.98l4.57,3.88l0.2,4.4l-3.38,2.33l-0.2,5.43l-4.37,8.02l-1.79,-1.03l-0.4,-3.62l-6.16,-5.69l-1.39,-7.76l0.2,-11.38l0.99,-4.91l-1.79,-2.59l-0.99,-5.43l3.77,-8.02l0.02,-0.01z" id="AL"/>
    <path d="m593.3,347.89l-0.6,2.07l1.39,5.43l-0.4,6.72l-5.56,0l2.18,3.62l-2.58,10.34l-1.79,2.84l-8.74,0.26l-4.77,3.88l-8.34,-1.29l-14.5,-4.4l-2.58,-5.43l-9.73,2.84l-0.99,3.1l-6.16,-2.33l-5.16,-0.52l-4.57,-3.1l1.39,-3.88l-0.4,-2.84l2.78,-0.78l5.36,4.4l1.19,-4.4l8.74,0.78l6.95,-2.84l4.77,0.52l3.38,3.36l0.79,-2.84l-1.99,-10.6l3.38,-2.07l3.18,-7.5l7.55,5.43l5.16,-6.72l3.38,-1.29l7.94,4.91l4.57,-0.78l4.77,3.1l0.01,0.01z" id="AT"/>
    <path d="m485.88,312.46l-0.79,10.86l-2.58,0.52l-0.79,9.05l-8.74,-7.5l-4.96,1.29l-6.95,-7.5l-4.77,-6.46l-4.37,-0.26l-1.59,-5.69l7.74,-3.1l7.15,1.29l8.94,-3.36l6.16,6.98l5.56,3.88l-0.01,0z" id="BE"/>
    <path d="m716.42,427.54l-4.57,6.72l-2.58,11.64l4.17,9.31l-9.13,-2.07l-9.93,5.17l0.6,8.27l-9.13,1.55l-7.74,-5.95l-7.94,4.65l-7.55,-0.52l-1.59,-10.86l-5.56,-5.43l1.39,-2.07l-1.19,-2.07l1.19,-5.17l3.57,-5.17l-5.56,-6.98l-1.39,-6.21l2.18,-3.62l3.57,6.72l3.77,-1.03l7.94,2.33l15.09,1.03l4.57,-4.14l11.72,-3.88l7.94,5.95l6.16,1.81l0,0.02z" id="BG"/>
    <path d="m617.93,408.66l3.77,-0.26l-2.18,7.24l5.36,6.46l-0.99,7.5l-2.18,0.78l-1.79,1.55l-3.18,3.88l-0.79,9.05l-9.53,-6.21l-4.17,-6.98l-4.17,-3.62l-4.96,-6.21l-2.58,-4.91l-5.36,-7.76l1.59,-6.72l3.97,3.88l1.99,-3.62l4.57,-0.26l8.94,2.84l6.95,-0.26l4.77,3.62l-0.03,0.01z" id="BA"/>
    <path d="m734.29,275.23l-7.74,-0.52l-1.59,1.55l2.98,5.17l3.97,10.34l-8.14,0.78l-2.58,3.62l0.6,8.02l-4.17,-1.55l-8.54,0.78l-2.98,-3.88l-3.38,2.84l-3.77,-2.33l-7.74,-0.26l-11.32,-3.88l-9.73,-1.29l-7.55,0.52l-4.77,4.14l-4.57,0.78l-0.99,-7.24l-3.77,-7.24l5.56,-3.36l-0.79,-6.21l-3.38,-5.95l-1.19,-6.98l9.33,0l9.53,-5.95l0.99,-8.79l7.15,-5.17l-1.99,-6.98l5.36,-2.59l9.13,-5.95l10.52,3.88l1.79,3.88l4.77,-1.81l9.53,3.62l2.18,7.5l-1.39,4.14l7.55,10.34l4.17,2.84l0,2.84l6.75,2.84l3.38,4.14l-3.18,3.36l0.01,0.01z" id="BY"/>
    <path d="m521.42,365.22l0.4,2.84l-1.39,3.88l4.57,3.1l5.16,0.52l-0.6,6.46l-4.17,2.84l-7.55,-2.07l-1.99,6.46l-4.77,0.52l-1.79,-2.59l-5.36,5.69l-4.96,0.78l-4.37,-3.62l-3.57,-6.98l-4.77,2.59l0,-7.5l7.15,-9.05l-0.4,-4.14l4.57,1.55l2.58,-2.84l8.34,0l1.99,-3.36l10.92,4.91l0.01,0.01z" id="CH"/>
    <path d="m571.66,307.55l4.96,5.17l7.35,1.29l-0.4,4.4l5.56,3.36l1.19,-4.14l6.75,1.81l1.39,5.17l7.35,0.78l5.16,8.02l-2.98,0l-1.39,2.84l-2.18,0.78l-0.4,3.62l-1.79,0.78l-0.2,1.55l-3.18,1.55l-4.37,-0.26l-1.19,3.62l-4.77,-3.1l-4.57,0.78l-7.94,-4.91l-3.38,1.29l-5.16,6.72l-7.55,-5.43l-5.96,-6.72l-5.16,-3.88l-1.39,-6.98l-1.99,-4.65l6.75,-3.36l3.38,-4.14l6.95,-3.1l2.18,-3.1l2.58,1.81l4.37,-1.55l0.03,-0.02z" id="CZ"/>
    <path d="m560.14,265.4l2.78,8.02l-2.38,4.4l3.77,5.43l2.98,8.53l-0.4,5.69l4.77,10.09l-4.37,1.55l-2.58,-1.81l-2.18,3.1l-6.95,3.1l-3.38,4.14l-6.75,3.36l1.99,4.65l1.39,6.98l5.16,3.88l5.96,6.72l-3.18,7.5l-3.38,2.07l1.99,10.6l-0.79,2.84l-3.38,-3.36l-4.77,-0.52l-6.95,2.84l-8.74,-0.78l-1.19,4.4l-5.36,-4.4l-2.78,0.78l-10.92,-4.91l-1.99,3.36l-8.34,0l0.79,-11.64l4.77,-10.86l-14.3,-3.1l-4.77,-4.14l0.4,-6.98l-1.99,-3.62l0.79,-10.86l-2.18,-16.81l5.76,0l2.38,-5.95l1.79,-14.48l-1.79,-5.43l1.59,-3.36l7.94,-0.78l1.99,3.36l6.16,-7.76l-2.58,-5.95l-0.79,-8.79l7.35,2.07l5.76,-2.33l0.6,5.95l9.73,3.62l0.2,5.69l9.33,-3.1l5.16,-4.14l11.12,6.21l4.77,4.91l-0.01,0.02z" id="DE"/>
    <path d="m544.65,236.44l-4.77,12.67l-10.33,-9.05l-1.79,-6.46l13.5,-5.17l3.38,8.02l0.01,-0.01z" id="svg_9"/>
    <path d="m519.24,246.26l-5.76,2.33l-7.35,-2.07l-4.17,-8.79l-0.79,-15.77l1.19,-4.4l2.58,-4.65l7.94,-0.78l3.18,-4.4l7.15,-4.4l0,8.02l-2.38,5.17l1.39,4.14l5.16,2.33l-1.99,5.95l-2.78,-1.55l-6.16,11.12l2.78,7.76l0.01,-0.01z" id="svg_10"/>
    <path d="m514.67,538.73l-1.99,8.53l1.99,15.77l-2.18,13.71l-6.35,9.31l1.19,12.41l8.94,10.09l0.2,3.88l6.75,6.72l5.16,29.74l3.77,14.74l0.79,7.76l-1.59,13.45l0.79,7.76l-1.19,9.05l1.19,10.34l-4.37,6.98l6.75,12.15l0.4,6.98l4.17,9.31l4.96,-3.1l8.94,7.76l4.96,10.34l-37.33,31.81l-31.77,32.58l-15.49,7.24l-12.31,1.81l-0.2,-10.6l-5.16,-2.84l-6.95,-4.65l-2.58,-7.76l-37.13,-36.2l-36.93,-36.2l-40.71,-40.34l0.6,-23.78l17.67,-12.41l10.72,-2.59l8.94,-4.4l4.17,-8.27l12.71,-6.46l0.6,-12.41l6.16,-1.55l4.96,-5.95l14.1,-2.84l1.99,-6.46l-2.78,-3.62l-3.77,-17.58l-0.6,-10.09l-3.77,-10.6l10.13,-9.05l11.52,-2.84l6.55,-6.72l10.13,-5.17l17.87,-2.84l17.47,-1.29l5.36,2.33l9.73,-6.46l11.32,-0.26l4.37,3.88l7.15,-1.03l-0.02,-0.07z" id="DZ"/>
    <path d="m794.85,633.89l7.74,24.31l1.39,4.14l-2.58,6.72l-1.39,12.41l-2.38,8.79l-2.38,2.84l-3.97,-5.43l-5.36,-7.24l-9.33,-23.79l-0.99,1.55l5.56,17.33l7.74,16.81l9.73,25.86l4.57,9.05l3.97,9.31l10.72,18.36l-1.99,2.84l0.79,10.86l13.5,15l2.18,3.36l-43.88,0l-42.69,0l-44.28,0l-1.99,-61.29l-2.58,-58.96l-3.97,-13.45l2.18,-10.09l-1.99,-7.24l3.38,-8.02l14.3,-0.26l10.72,4.4l10.92,4.91l5.16,2.59l7.94,-5.17l4.17,-4.65l9.33,-1.55l7.74,2.07l3.57,8.27l2.18,-5.43l8.74,3.88l8.54,1.03l4.96,-4.14l0.03,0.02z" id="EG"/>
    <path d="m678.89,176.7l1.79,2.59l-5.16,8.79l4.77,14.48l-3.18,4.91l-7.55,-0.26l-8.74,-5.69l-4.17,-1.81l-7.55,2.59l-0.2,-9.05l-2.98,2.07l-6.55,-5.43l-1.99,-8.79l10.92,-4.4l11.12,-2.07l10.13,2.33l9.33,-0.26l0.01,0z" id="EE"/>
    <path d="m659.82,35.77l0.79,9.83l14.5,9.57l-5.76,10.86l12.91,16.29l-3.38,12.41l9.73,10.86l-1.79,9.83l14.69,10.09l-1.79,7.5l-6.75,8.79l-15.89,19.14l-15.89,1.29l-15.09,5.43l-14.1,3.36l-6.35,-8.27l-9.33,-4.91l0.2,-15l-5.96,-13.45l3.18,-8.79l6.55,-9.05l17.47,-16.03l5.16,-3.1l-1.79,-6.21l-12.91,-6.72l-3.57,-5.69l-3.57,-21.98l-14.3,-9.57l-11.91,-6.98l4.37,-3.62l10.13,7.24l10.52,-0.52l9.33,3.36l6.75,-6.21l2.18,-10.34l11.72,-4.65l11.52,5.43l-1.59,9.83l0.02,-0.02z" id="FI"/>
    <path d="m367.13,263.59l-6.95,-3.1l-5.96,0.26l2.38,-8.53l-1.79,-8.27l7.94,-0.78l9.73,9.83l-5.36,10.6l0.01,-0.01z" id="svg_11"/>
    <path d="m398.71,189.37l-10.13,16.81l9.33,-2.07l10.13,0l-2.58,12.67l-8.54,13.96l9.73,0.78l0.6,1.81l8.34,18.36l6.35,2.59l5.76,18.1l2.78,6.21l11.72,2.84l-1.19,10.34l-4.77,4.65l3.77,8.27l-8.74,8.27l-12.91,-0.26l-16.68,4.65l-4.37,-3.36l-6.55,7.5l-8.94,-1.81l-7.15,6.21l-4.96,-3.1l14.5,-16.81l8.74,-3.62l-15.09,-2.59l-2.58,-6.46l10.13,-4.91l-4.96,-8.53l1.99,-10.34l14.1,1.55l1.59,-9.31l-6.16,-9.57l-0.2,-0.26l-11.32,-2.84l-2.18,-4.14l3.57,-6.98l-2.98,-4.4l-5.16,7.5l-0.2,-15.26l-4.37,-7.76l3.77,-16.03l7.55,-12.41l7.15,1.03l11.12,-1.29l-0.01,0.01z" id="UK"/>
    <path d="m676.9,559.42l6.16,5.69l8.14,-1.03l7.94,1.03l0,3.1l5.56,-2.07l-0.99,4.91l-15.09,1.29l-0.2,-2.59l-13.11,-3.36l1.59,-6.98l0,0.01z" id="svg_13"/>
    <path d="m695.17,474.86l-6.35,-0.52l-5.36,-1.55l-12.31,4.14l7.94,9.31l-4.96,2.84l-5.76,0l-6.16,-8.53l-1.79,3.62l3.18,9.83l5.76,7.76l-3.77,3.62l6.35,7.5l5.56,4.91l0.79,9.31l-9.93,-4.4l3.57,8.53l-6.55,1.55l4.96,14.74l-6.95,0.26l-9.13,-7.24l-4.77,-13.19l-2.58,-11.12l-4.57,-7.5l-5.96,-9.57l-0.99,-4.65l4.37,-8.02l0.2,-5.43l3.38,-2.33l-0.2,-4.4l6.75,-1.29l3.57,-3.62l5.56,0.26l1.59,-2.84l1.99,-0.52l7.55,0.52l7.94,-4.65l7.74,5.95l9.13,-1.55l-0.6,-8.27l5.36,4.4l-2.18,10.34l-2.38,1.81l0.01,-0.01z" id="svg_14"/>
    <path d="m614.95,391.33l2.98,6.46l3.38,4.65l-3.38,6.21l-4.77,-3.62l-6.95,0.26l-8.94,-2.84l-4.57,0.26l-1.99,3.62l-3.97,-3.88l-1.59,6.72l5.36,7.76l2.58,4.91l4.96,6.21l4.17,3.62l4.17,6.98l9.53,6.21l-0.99,2.59l-9.93,-5.95l-6.35,-5.95l-9.53,-4.91l-9.33,-11.9l1.99,-1.29l-4.96,-6.98l-0.6,-5.43l-6.55,-2.59l-2.78,6.98l-3.18,-5.43l0,-5.69l0.2,-0.26l7.15,0.52l1.59,-2.59l3.57,2.59l3.97,0.26l-0.2,-4.4l3.38,-1.81l0.6,-6.46l7.74,-4.4l3.18,2.07l7.94,6.98l8.54,3.1l3.57,-2.59l0.01,0.01z" id="HR"/>
    <path d="m644.14,350.73l5.96,4.4l0.99,4.4l-5.76,3.36l-3.77,10.86l-5.16,11.12l-7.74,3.1l-6.35,-0.78l-7.35,4.14l-3.57,2.59l-8.54,-3.1l-7.94,-6.98l-3.18,-2.07l-2.38,-5.43l-1.59,-0.26l2.58,-10.34l-2.18,-3.62l5.56,0l0.4,-6.72l5.36,4.4l3.77,1.55l8.14,-1.81l0.6,-3.36l3.77,-0.52l4.57,-2.33l1.19,1.03l4.57,-2.07l1.99,-3.88l3.18,-1.03l10.92,4.91l1.99,-1.55l-0.03,-0.01z" id="HU"/>
    <path d="m367.13,263.59l1.39,11.38l-7.74,14.22l-17.47,9.31l-13.5,-2.33l8.54,-16.55l-4.17,-16.03l13.3,-12.41l7.35,-7.24l1.79,8.27l-2.38,8.53l5.96,-0.26l6.95,3.1l-0.02,0.01z" id="IE"/>
    <path d="m303.79,73.01l-2.78,9.31l8.74,9.83l-12.11,11.12l-26.01,10.09l-7.74,2.84l-11.12,-2.33l-23.63,-4.65l9.53,-6.46l-17.87,-6.98l15.69,-2.84l0.2,-4.4l-17.47,-3.36l7.15,-9.57l13.11,-2.07l11.91,9.83l13.9,-7.76l10.13,3.88l14.5,-7.5l13.9,1.03l-0.03,-0.01z" id="IS"/>
    <path d="m808.75,599.76l0.79,6.72l-1.19,2.59l0.2,0l-1.39,5.17l-4.17,-2.07l-1.39,10.86l2.98,1.81l-2.58,2.33l-0.2,4.4l4.96,-2.07l0.79,6.46l-3.57,26.38l-1.39,-4.14l-7.74,-24.31l2.78,-5.43l-0.79,-1.03l2.18,-7.76l1.19,-12.41l1.19,-4.4l0.2,0l3.57,0l0.79,-2.84l2.78,-0.26l0.01,0z" id="IL"/>
    <path d="m588.54,517.53l-3.38,13.19l1.79,4.91l-1.79,8.53l-8.34,-6.21l-5.36,-1.81l-14.89,-8.27l0.99,-8.53l12.31,1.55l10.72,-1.81l7.94,-1.55l0.01,0z" id="svg_28"/>
    <path d="m521.02,468.39l6.55,11.64l-0.79,21.98l-4.77,-1.03l-4.17,5.43l-3.97,-4.4l-0.99,-19.91l-2.58,-9.31l5.76,0.78l4.96,-5.17l0,-0.01z" id="svg_29"/>
    <path d="m564.11,381.77l-0.79,8.02l2.78,6.98l-8.14,-2.59l-7.74,5.95l0.79,8.02l-0.99,4.65l3.77,8.27l9.93,8.27l5.76,13.71l12.11,13.19l7.94,-0.26l2.78,3.62l-2.78,3.36l9.53,5.95l7.94,4.91l9.33,8.79l1.19,2.84l-1.59,5.95l-6.16,-7.76l-9.13,-2.59l-3.77,10.6l7.74,6.21l-0.79,8.53l-4.17,1.03l-4.96,14.22l-4.37,1.29l-0.2,-5.17l1.79,-8.79l2.18,-3.62l-4.57,-9.57l-3.57,-8.27l-4.37,-2.07l-3.57,-6.98l-6.75,-3.1l-4.77,-6.72l-7.55,-1.03l-8.54,-7.24l-9.73,-10.86l-7.35,-9.31l-3.77,-16.29l-5.16,-1.81l-8.34,-5.43l-4.57,2.07l-5.76,7.76l-4.17,1.03l0.99,-6.98l-5.56,-2.07l-2.98,-12.67l3.38,-4.91l-2.98,-6.21l0.2,-4.65l4.37,3.62l4.96,-0.78l5.36,-5.69l1.79,2.59l4.77,-0.52l1.99,-6.46l7.55,2.07l4.17,-2.84l0.6,-6.46l6.16,2.33l0.99,-3.1l9.73,-2.84l2.58,5.43l14.5,4.4l-0.01,-0.02z" id="svg_30"/>
    <path d="m846.48,618.12l-1.79,2.59l-20.65,8.27l11.91,16.81l-3.18,2.59l-1.39,5.69l-8.14,2.33l-2.18,5.95l-4.17,5.17l-12.31,-2.84l-0.6,-2.33l3.57,-26.38l-0.79,-6.46l1.19,-4.91l-0.79,-10.34l1.39,-5.17l12.51,6.72l19.26,-17.84l6.16,20.17l0,-0.02z" id="JO"/>
    <path d="m808.75,599.76l-2.78,0.26l-0.79,2.84l-3.57,0l2.58,-13.71l4.37,-11.64l0,-0.52l4.96,0.78l2.38,6.46l-5.36,6.46l-1.79,9.05l0,0.02z" id="LB"/>
    <path d="m696.56,627.94l-3.38,8.02l1.99,7.24l-2.18,10.09l3.97,13.45l2.58,58.96l1.99,61.29l0.99,33.1l-12.71,0l0,6.98l-44.88,-31.81l-44.68,-31.81l-10.92,9.05l-7.55,6.21l-6.35,-9.05l-17.47,-7.24l-4.96,-10.34l-8.94,-7.76l-4.96,3.1l-4.17,-9.31l-0.4,-6.98l-6.75,-12.15l4.37,-6.98l-1.19,-10.34l1.19,-9.05l-0.79,-7.76l1.59,-13.45l-0.79,-7.76l-3.77,-14.74l5.16,-3.62l0.79,-7.24l-1.19,-6.72l7.15,-6.46l3.18,-5.43l5.16,-4.65l0.2,-12.67l12.71,5.69l4.57,-1.55l8.94,2.84l14.5,7.5l5.56,14.74l9.73,3.1l15.49,6.98l11.91,8.27l4.96,-4.4l4.96,-7.5l-3.18,-12.67l2.98,-8.27l7.35,-7.76l7.35,-2.07l14.69,3.36l3.97,7.24l3.97,0.26l3.57,2.84l10.72,1.81l2.98,5.43l-0.01,-0.01z" id="LY"/>
    <path d="m673.72,236.18l1.99,6.98l-7.15,5.17l-0.99,8.79l-9.53,5.95l-9.33,0l-2.78,-4.91l-4.96,-1.81l-1.19,-3.88l0.4,-4.4l-4.37,-2.33l-10.13,-2.84l-3.38,-13.19l10.13,-4.65l15.69,1.03l8.94,-1.55l1.79,3.1l4.96,1.03l9.93,7.5l-0.02,0.01z" id="LT"/>
    <path d="m486.67,333.93l-2.78,0.26l-2.18,-1.29l0.79,-9.05l2.58,-0.52l1.99,3.62l-0.4,6.98z" id="LU"/>
    <path d="m677.1,207.47l4.96,3.36l1.99,7.5l4.17,9.31l-9.13,5.95l-5.36,2.59l-9.93,-7.5l-4.96,-1.03l-1.79,-3.1l-8.94,1.55l-15.69,-1.03l-10.13,4.65l-0.99,-11.64l3.38,-9.83l8.14,-5.17l8.74,11.64l7.35,-0.52l0.2,-11.9l7.55,-2.59l4.17,1.81l8.74,5.69l7.55,0.26l-0.02,0z" id="LV"/>
    <path d="m403.07,568.21l3.77,10.6l0.6,10.09l3.77,17.58l2.78,3.62l-1.99,6.46l-14.1,2.84l-4.96,5.95l-6.16,1.55l-0.6,12.41l-12.71,6.46l-4.17,8.27l-8.94,4.4l-10.72,2.59l-17.67,12.41l-0.47,14.85l-0.18,8.92l-8.66,-42.16l-2.38,-20.43l4.37,-14.48l1.79,-8.79l7.15,-11.12l10.72,-7.5l8.14,-6.98l7.35,-17.07l3.57,-10.34l7.74,0.26l6.16,6.98l10.13,-1.03l10.92,3.62l4.77,0l-0.02,0.04z" id="MA"/>
    <path d="m710.06,398.31l-2.58,-7.5l0.4,-6.98l-1.19,-6.98l-6.75,-9.83l-3.97,-6.72l-3.57,-4.65l-3.18,-1.81l2.18,-2.33l6.35,-1.55l7.94,4.91l3.97,0.78l5.16,4.4l-0.2,5.43l3.97,2.59l2.18,6.72l3.97,4.14l-0.4,2.59l1.99,1.55l-2.58,1.29l-5.96,-0.52l-1.19,-2.33l-1.99,1.29l1.19,2.84l-2.18,5.43l-1.19,5.43l-2.38,1.81l0.01,0z" id="MD"/>
    <path d="m662.6,466.32l-1.99,0.52l-1.59,2.84l-5.56,-0.26l-3.57,3.62l-6.75,1.29l-4.57,-3.88l-1.99,-6.98l0.99,-5.69l1.39,0.26l0.2,-3.36l5.76,-2.59l2.38,-0.78l3.38,-0.78l4.77,-0.52l5.56,5.43l1.59,10.86l0,0.02z" id="MK"/>
    <path d="m633.02,442.02l-1.59,3.62l-2.78,1.55l-0.79,-3.1l-3.77,8.02l0.99,5.43l-2.18,-1.29l-3.38,-5.43l-4.57,-3.36l0.99,-2.59l0.79,-9.05l3.18,-3.88l1.79,-1.55l2.78,2.84l1.79,2.33l3.38,1.81l4.17,3.36l-0.79,1.29l-0.01,0z" id="ME"/>
    <path d="m678.89,29.05l-12.71,5.43l-6.35,1.29l1.59,-9.83l-11.52,-5.43l-11.72,4.65l-2.18,10.34l-6.75,6.21l-9.33,-3.36l-10.52,0.52l-10.13,-7.24l-4.37,3.62l-5.16,0.52l0.2,9.31l-15.89,-2.33l-1.19,8.02l-7.94,0l-4.57,10.09l-6.75,15.77l-11.32,20.43l3.57,5.17l-2.58,5.69l-8.54,-0.26l-4.77,13.96l1.99,19.91l6.16,7.5l-1.59,17.84l-6.75,10.34l-3.57,8.79l-6.55,-9.31l-17.08,17.58l-12.11,3.62l-12.91,-7.76l-3.57,-16.29l-3.97,-34.91l7.94,-9.57l22.44,-12.67l16.08,-15.26l14.3,-20.17l17.67,-27.67l12.71,-10.6l20.45,-17.58l16.88,-6.21l13.3,0.78l10.33,-11.38l14.69,0.52l13.9,-2.59l27.2,10.09l-9.73,3.62l10.72,8.79l0,0.02z" id="svg_36"/>
    <path d="m611.77,254.8l11.72,1.81l17.47,-0.26l4.96,1.81l2.78,4.91l1.19,6.98l3.38,5.95l0.79,6.21l-5.56,3.36l3.77,7.24l0.99,7.24l6.35,13.96l-0.6,4.4l-4.57,1.81l-7.55,13.45l3.18,7.24l-2.18,-1.03l-9.93,-6.21l-6.95,2.33l-4.77,-1.55l-5.56,3.36l-5.36,-5.69l-3.77,2.33l-0.6,-1.03l-5.16,-8.02l-7.35,-0.78l-1.39,-5.17l-6.75,-1.81l-1.19,4.14l-5.56,-3.36l0.4,-4.4l-7.35,-1.29l-4.96,-5.17l-4.77,-10.09l0.4,-5.69l-2.98,-8.53l-3.77,-5.43l2.38,-4.4l-2.78,-8.02l6.16,-4.65l14.1,-7.24l11.52,-5.17l9.53,2.59l1.19,3.88l9.13,0l0.02,-0.01z" id="PL"/>
    <path d="m807.16,614.24l0.79,10.34l-1.19,4.91l-4.96,2.07l0.2,-4.4l2.58,-2.33l-2.98,-1.81l1.39,-10.86l4.17,2.07l0,0.01z" id="PS"/>
    <path d="m689.21,353.84l3.18,1.81l3.57,4.65l3.97,6.72l6.75,9.83l1.19,6.98l-0.4,6.98l2.58,7.5l4.77,3.1l4.57,-2.84l4.77,2.84l0.79,4.4l-4.57,3.36l-3.18,-1.55l-0.79,19.91l-6.16,-1.81l-7.94,-5.95l-11.72,3.88l-4.57,4.14l-15.09,-1.03l-7.94,-2.33l-3.77,1.03l-3.57,-6.72l-1.99,-2.84l1.99,-2.84l-2.58,-1.81l-2.98,3.62l-6.16,-4.91l-1.39,-6.72l-6.35,-3.62l-1.59,-5.43l-5.96,-6.21l7.74,-3.1l5.16,-11.12l3.77,-10.86l5.76,-3.36l3.97,-3.62l6.35,1.81l6.35,0l4.96,4.14l3.18,-2.59l7.15,-1.55l1.99,-3.88l4.17,0l0.02,-0.01z" id="RO"/>
    <path d="m655.65,418.74l-2.18,3.62l1.39,6.21l5.56,6.98l-3.57,5.17l-1.19,5.17l1.19,2.07l-1.39,2.07l-4.77,0.52l-3.38,0.78l-0.6,-1.29l1.19,-1.81l0.79,-4.14l-1.39,0.26l-2.18,-3.1l-1.79,-0.78l-1.59,-2.59l-1.99,-1.03l-1.59,-2.33l-1.79,1.03l-0.99,5.43l-2.38,1.03l0.79,-1.29l-4.17,-3.36l-3.38,-1.81l-1.79,-2.33l-2.78,-2.84l2.18,-0.78l0.99,-7.5l-5.36,-6.46l2.18,-7.24l-3.77,0.26l3.38,-6.21l-3.38,-4.65l-2.98,-6.46l7.35,-4.14l6.35,0.78l5.96,6.21l1.59,5.43l6.35,3.62l1.39,6.72l6.16,4.91l2.98,-3.62l2.58,1.81l-1.99,2.84l1.99,2.84l0.03,0z" id="RS"/>
    <path d="m647.91,339.87l-2.38,4.4l-1.39,6.46l-1.99,1.55l-10.92,-4.91l-3.18,1.03l-1.99,3.88l-4.57,2.07l-1.19,-1.03l-4.57,2.33l-3.77,0.52l-0.6,3.36l-8.14,1.81l-3.77,-1.55l-5.36,-4.4l-1.39,-5.43l0.6,-2.07l1.19,-3.62l4.37,0.26l3.18,-1.55l0.2,-1.55l1.79,-0.78l0.4,-3.62l2.18,-0.78l1.39,-2.84l2.98,0l0.6,1.03l3.77,-2.33l5.36,5.69l5.56,-3.36l4.77,1.55l6.95,-2.33l9.93,6.21l-0.01,0z" id="SK"/>
    <path d="m591.72,381.77l-7.74,4.4l-0.6,6.46l-3.38,1.81l0.2,4.4l-3.97,-0.26l-3.57,-2.59l-1.59,2.59l-7.15,-0.52l2.18,-1.29l-2.78,-6.98l0.79,-8.02l8.34,1.29l4.77,-3.88l8.74,-0.26l1.79,-2.84l1.59,0.26l2.38,5.43z" id="SI"/>
    <path d="m628.25,79.47l-13.9,4.14l-6.95,10.09l2.58,9.05l-12.31,11.64l-15.49,12.93l-4.17,20.95l7.35,10.6l9.53,8.53l-6.55,17.07l-9.13,3.62l-1.19,25.86l-4.17,14.74l-11.32,-1.55l-4.37,12.41l-10.92,0.78l-3.77,-14.74l-8.94,-17.84l-8.34,-21.72l3.57,-8.79l6.75,-10.34l1.59,-17.84l-6.16,-7.5l-1.99,-19.91l4.77,-13.96l8.54,0.26l2.58,-5.69l-3.57,-5.17l11.32,-20.43l6.75,-15.77l4.57,-10.09l7.94,0l1.19,-8.02l15.89,2.33l-0.2,-9.31l5.16,-0.52l11.91,6.98l14.3,9.57l3.57,21.98l3.57,5.69l0.01,-0.03z" id="SE"/>
    <path d="m840.32,597.95l-19.26,17.84l-12.51,-6.72l-0.2,0l1.19,-2.59l-0.79,-6.72l1.79,-9.05l5.36,-6.46l-2.38,-6.46l-4.96,-0.78l-2.18,-12.67l1.99,-6.98l2.58,-3.62l2.38,-3.62l-0.4,-9.05l3.77,3.1l11.12,-4.65l5.96,3.1l8.74,0l11.32,-6.21l5.76,0.26l11.72,-2.59l-4.17,10.34l-5.36,4.14l2.38,12.15l-1.99,19.91l-21.84,17.33l-0.02,0z" id="SY"/>
    <path d="m548.82,602.08l-0.2,12.67l-5.16,4.65l-3.18,5.43l-7.15,6.46l1.19,6.72l-0.79,7.24l-5.16,3.62l-5.16,-29.74l-6.75,-6.72l-0.2,-3.88l-8.94,-10.09l-1.19,-12.41l6.35,-9.31l2.18,-13.71l-1.99,-15.77l1.99,-8.53l11.32,-6.46l7.35,1.81l0,8.53l8.74,-6.21l0.79,3.1l-4.96,8.27l0.2,7.5l3.77,4.14l-0.99,14.48l-6.95,8.27l2.38,9.05l5.56,0.26l2.78,8.02l4.17,2.59l0,0.02z" id="TN"/>
    <path d="m853.63,462.96l10.92,-0.78l11.12,8.27l2.58,5.69l0.2,8.02l8.34,4.14l4.77,4.65l-6.55,4.91l5.76,18.88l-1.39,5.17l7.55,13.19l-4.77,2.84l-4.17,-4.14l-12.51,-2.33l-4.17,2.59l-11.72,2.59l-5.76,-0.26l-11.32,6.21l-8.74,0l-5.96,-3.1l-11.12,4.65l-3.77,-3.1l0.4,9.05l-2.38,3.62l-2.58,3.62l-4.57,-7.5l3.38,-6.21l-6.35,1.55l-9.13,-3.88l-6.35,9.57l-15.89,1.81l-9.33,-8.79l-11.32,-0.52l-1.99,6.72l-7.15,2.07l-10.72,-8.79l-11.52,0.26l-7.55,-16.55l-8.34,-9.05l3.97,-12.93l-7.15,-8.02l10.13,-15.77l15.89,-0.52l3.18,-12.67l19.86,2.33l11.12,-10.6l11.52,-4.65l16.88,-0.52l19.46,11.64l15.69,6.46l11.52,-2.59l9.13,1.55l10.92,-8.79l-0.02,0.01z" id="svg_53"/>
    <path d="m695.17,474.86l2.38,-1.81l2.18,-10.34l-5.36,-4.4l9.93,-5.17l9.13,2.07l1.79,6.46l9.53,5.17l-1.39,4.14l-12.31,0.78l-3.97,5.17l-7.74,8.79l-3.97,-7.5l-0.2,-3.36z" id="svg_54"/>
    <path d="m765.26,306l4.57,6.98l0.2,3.1l13.3,5.69l7.15,-2.59l7.15,7.5l5.76,-0.26l15.29,5.17l0.79,4.91l-2.58,8.27l3.57,9.05l-0.6,5.43l-9.53,1.03l-4.37,4.65l0.79,6.98l-7.74,1.29l-5.96,5.43l-9.13,0.78l-7.94,6.21l1.99,10.09l5.56,3.88l10.13,-1.03l-1.19,5.95l-10.72,2.84l-12.51,9.31l-6.16,-3.36l1.39,-7.5l-11.72,-4.91l1.39,-3.1l9.13,-5.43l-3.38,-3.62l-16.08,-4.14l-1.59,-6.21l-8.94,2.07l-2.58,9.05l-6.55,11.9l-4.77,-2.84l-4.57,2.84l-4.77,-3.1l2.38,-1.81l1.19,-5.43l2.18,-5.43l-1.19,-2.84l1.99,-1.29l1.19,2.33l5.96,0.52l2.58,-1.29l-1.99,-1.55l0.4,-2.59l-3.97,-4.14l-2.18,-6.72l-3.97,-2.59l0.2,-5.43l-5.16,-4.4l-3.97,-0.78l-7.94,-4.91l-6.35,1.55l-2.18,2.33l-4.17,0l-1.99,3.88l-7.15,1.55l-3.18,2.59l-4.96,-4.14l-6.35,0l-6.35,-1.81l-3.97,3.62l-0.99,-4.4l-5.96,-4.4l1.39,-6.46l2.38,-4.4l2.18,1.03l-3.18,-7.24l7.55,-13.45l4.57,-1.81l0.6,-4.4l-6.35,-13.96l4.57,-0.78l4.77,-4.14l7.55,-0.52l9.73,1.29l11.32,3.88l7.74,0.26l3.77,2.33l3.38,-2.84l2.98,3.88l8.54,-0.78l4.17,1.55l-0.6,-8.02l2.58,-3.62l8.14,-0.78l3.57,0.52l1.99,-3.62l2.98,0.78l9.73,-1.55l7.55,9.05l-1.79,3.36l1.59,4.91l7.74,0.78l-0.02,0.02z" id="UA"/>
    <path d="m647.31,451.33l-2.38,0.78l-5.76,2.59l-0.2,3.36l-1.39,-0.26l-1.19,-5.95l-2.58,-1.81l-2.38,-4.4l1.59,-3.62l2.38,-1.03l0.99,-5.43l1.79,-1.03l1.59,2.33l1.99,1.03l1.59,2.59l1.79,0.78l2.18,3.1l1.39,-0.26l-0.79,4.14l-1.19,1.81l0.6,1.29l-0.02,-0.01z" id="XK"/>
    <path d="m485.88,312.46l-5.56,-3.88l-6.16,-6.98l-8.94,3.36l-7.15,-1.29l4.96,-4.4l7.94,-23.27l12.91,-6.72l7.94,0.52l1.79,5.43l-1.79,14.48l-2.38,5.95l-5.76,0l2.18,16.81l0.02,-0.01z" id="NL"/>
    <path d="m347.67,536.4l-4.37,4.14l-5.56,-2.33l-5.36,1.81l1.79,-12.93l-0.6,-10.09l-4.77,-1.55l-2.18,-6.21l0.99,-10.86l4.37,-5.95l0.99,-6.72l2.38,-9.83l0,-6.98l-1.79,-5.95l-0.4,-5.69l3.77,-4.14l4.37,-2.33l2.38,8.02l5.96,0l1.79,-2.07l6.16,0.52l2.58,8.27l-4.77,4.4l-0.6,12.93l-1.59,2.33l-0.6,8.02l-4.57,1.29l3.97,9.83l-3.18,10.86l3.57,4.91l-1.59,4.4l-3.97,6.21l0.79,5.69l0.04,0z" id="PT"/>
    <path d="m640.96,256.35l-17.47,0.26l-11.72,-1.81l1.39,-6.72l12.51,-5.17l10.13,2.84l4.37,2.33l-0.4,4.4l1.19,3.88l0,-0.01z" id="svg_60"/>
    <path d="m406.65,432.19l3.97,6.21l18.86,7.5l3.77,-3.62l11.52,7.5l11.72,-2.07l0.79,9.57l-9.73,10.86l-13.11,3.62l-0.99,5.43l-6.35,9.05l-3.97,13.45l3.97,9.57l-5.96,7.24l-2.38,10.86l-7.94,3.36l-7.35,12.67l-13.5,0.26l-9.93,-0.26l-6.75,5.69l-4.17,6.21l-5.16,-1.29l-3.77,-5.69l-2.78,-9.31l-9.73,-2.59l-0.79,-5.69l3.97,-6.21l1.59,-4.4l-3.57,-4.91l3.18,-10.86l-3.97,-9.83l4.57,-1.29l0.6,-8.02l1.59,-2.33l0.6,-12.93l4.77,-4.4l-2.58,-8.27l-6.16,-0.52l-1.79,2.07l-5.96,0l-2.38,-8.02l-4.37,2.33l-3.77,4.14l0.99,-11.64l-3.97,-6.98l14.69,-11.9l12.31,2.84l13.7,0l10.72,2.84l8.54,-1.03l16.48,0.78l-0.02,0.01z" id="ES"/>
    <path d="m524,452.88l-2.98,12.67l-4.77,-3.36l-2.58,-10.86l1.79,-6.21l6.35,-6.21l2.18,13.96l0.01,0.01z" id="svg_69"/>
    <path d="m481.71,332.89l2.18,1.29l2.78,-0.26l4.77,4.14l14.3,3.1l-4.77,10.86l-0.79,11.64l-2.58,2.84l-4.57,-1.55l0.4,4.14l-7.15,9.05l0,7.5l4.77,-2.59l3.57,6.98l-0.2,4.65l2.98,6.21l-3.38,4.91l2.98,12.67l5.56,2.07l-0.99,6.98l-8.94,9.31l-20.25,-4.4l-14.69,5.43l-1.19,9.83l-11.72,2.07l-11.52,-7.5l-3.77,3.62l-18.86,-7.5l-3.97,-6.21l5.36,-9.83l1.99,-32.58l-10.13,-17.07l-7.35,-8.27l-15.09,-6.21l-0.79,-11.9l12.91,-3.36l16.48,4.14l-2.98,-18.36l9.33,6.98l22.64,-12.41l2.98,-13.19l8.34,-3.36l1.59,5.69l4.37,0.26l4.77,6.46l6.95,7.5l4.96,-1.29l8.74,7.5l-0.02,0.02z" id="svg_70"/>
    <path d="m787.11,570.02l0.2,0.52l0.6,1.03l-0.79,-0.26l-0.6,0l-0.79,0.52l-0.6,-0.78l0,-0.78l0.6,-0.26l0.4,0.26l0.99,-0.26l-0.01,0.01z" id="svg_118"/>
    <path d="m783.73,571.31l0,0.26l-0.4,0.52l-0.2,1.55l-0.2,0.52l-0.6,0l-0.4,0.52l-0.99,0.52l-0.4,0.26l-1.19,0.78l-0.79,-0.26l-0.99,0.26l-0.6,1.03l-0.4,-0.78l-0.6,0.26l-0.4,0l-0.6,-0.78l-0.79,0.78l-0.99,0l-0.99,-0.52l-0.99,-0.26l-0.79,-0.78l-0.6,-1.55l-0.6,-0.78l-0.4,-1.81l-0.4,-0.78l0.2,-0.78l0.99,0.78l0.79,-0.26l0.4,-0.78l0.2,-0.78l0.6,-0.26l0.4,0.26l0.4,-0.52l0.4,0l0.2,1.03l0.99,0.52l0.2,0.52l1.19,0l1.19,-1.29l0.79,0.26l0.6,-0.52l0.6,0.26l0.79,0.52l0.4,-0.78l0.6,0l0.6,1.03l0,1.55l0.6,-0.52l0.6,0.52l0.2,-0.26l1.39,0.52l-0.01,0.02z" id="svg_119"/>
    <path d="m364.95,144.12l0.79,0.52l0.6,0l0.2,0.52l0,1.03l0.4,0.78l-0.2,0.52l-1.19,-1.03l-0.4,-1.03l-0.4,-0.52l-0.4,-0.78l0.6,0l0,-0.01z" id="svg_131"/>
    <path d="m365.55,139.98l1.59,0.52l0.4,0.52l-0.2,1.03l-0.2,0.26l-0.79,-1.29l-0.99,-0.26l-0.4,-1.03l0.6,0.26l-0.01,-0.01z" id="svg_132"/>
    <path d="m363,136.47l0.16,0.41l0.6,0l0,0.78l-0.79,0l-0.4,0.52l-1.19,-0.52l-0.4,-0.26l-0.4,-0.78l0.99,-0.26l0.2,-0.26l1.11,0.23l-0.52,-0.49l0.4,-2.07l0.99,0.26l0.6,1.29l0,0.26l1.19,0.52l0.6,1.29l0.6,0.52l-0.2,1.55l-0.99,-1.03l-0.4,-0.52l-0.4,-0.26l-0.2,-0.52l-0.4,-0.52l-0.99,0l-0.16,-0.16l0,0.02z" id="svg_133"/>
    <path d="m370.31,134.81l-0.4,-0.52l0.6,-0.52l-0.2,1.03l0,0.01z" id="svg_134"/>
    <path d="m365.55,136.1l-0.79,-0.52l-0.6,-0.78l-0.2,-0.78l0.2,-0.26l0.79,-0.26l0.6,0l1.19,1.03l-0.2,0.52l0.2,0.52l1.19,0.52l0,0.52l-0.79,0.78l-1.59,-1.29z" id="svg_135"/>
    <path d="m369.91,134.55l-0.6,1.03l-0.6,-0.52l-0.6,0l0.4,-0.78l-0.2,-1.03l0.2,-0.26l0.4,1.03l0.99,0.52l0.01,0.01z" id="svg_136"/>
    <path d="m368.13,134.55l-0.4,0l-0.4,-1.03l0.2,-0.78l0.4,1.03l0.2,0.78z" id="svg_137"/>
    <path d="m580,557.09l-0.4,0.78l-0.99,-0.52l-0.99,-0.78l0,-1.29l-0.2,-0.26l1.19,0l0.79,0.78l0.4,0.52l0.2,0.78l0,-0.01z" id="svg_143"/>
    <path d="m576.82,554.24l-0.99,-0.26l0,-0.52l0.79,-0.26l0.79,0.78l-0.6,0.26l0.01,0z" id="svg_144"/>
    <path d="m2043.06,852.4l-0.2,-0.52l0,-1.29l0.6,-0.26l0.4,0.78l-0.79,1.29l-0.01,0z" id="svg_149"/>
    <path d="m2040.67,841.28l-0.79,-0.26l0,-0.78l0.4,-0.26l0.4,0.52l0,0.78l-0.01,0z" id="svg_150"/>
  </g>
 </g>
 <g id="Switzerland" className="office_point">
    <ellipse className="block" cx="515.7" cy="388.9" fill="#285c5c" rx="3" ry="3" stroke="#285c5c"/>
    <circle className="block" cx="515.7" cy="388.9" fill="none" r="6" strokeWidth="1" stroke="transparent"/>
    <ellipse className="hidden" cx="515.7" cy="388.9" fill="#FF0000"  rx="3" ry="3" stroke="#FF0000"/>
    <circle className="hidden" cx="515.7" cy="388.9" fill="none" r="6" strokeWidth="1" stroke="#FF0000"/>
 </g>
 <g id="UK Office" className="office_point">
    <ellipse className="block" cx="418.55" cy="301.05" fill="#285c5c" rx="3" ry="3" stroke="#285c5c"/>
    <circle className="block" cx="418.55" cy="301.05" fill="none" r="6" strokeWidth="1" stroke="transparent"/>
    <ellipse className="hidden" cx="418.55" cy="301.05" fill="#FF0000"  rx="3" ry="3" stroke="#FF0000"/>
    <circle className="hidden" cx="418.55" cy="301.05" fill="none" r="6" strokeWidth="1" stroke="#FF0000"/>
 </g>
 <g id="UK_partner" className="office_point">
    <ellipse className="block" cx="424.65" cy="286.65" fill="#3498db" rx="3" ry="3" stroke="#3498db"/>
    <circle className="block" cx="424.65" cy="286.65" fill="none" r="6" strokeWidth="1" stroke="transparent"/>
    <ellipse className="hidden" cx="424.65" cy="286.65" fill="#FF0000"  rx="3" ry="3" stroke="#FF0000"/>
    <circle className="hidden" cx="424.65" cy="286.65" fill="none" r="6" strokeWidth="1" stroke="#FF0000"/>
 </g>
 <g id="Ukraine" className="office_point">
    <ellipse className="block" cx="780.55" cy="363.95" fill="#285c5c" rx="3" ry="3" stroke="#285c5c"/>
    <circle className="block" cx="780.55" cy="363.95" fill="none" r="6" strokeWidth="1" stroke="transparent"/>
    <ellipse className="hidden" cx="780.55" cy="363.95" fill="#FF0000"  rx="3" ry="3" stroke="#FF0000"/>
    <circle className="hidden" cx="780.55" cy="363.95" fill="none" r="6" strokeWidth="1" stroke="#FF0000"/>
 </g>
 <g id="Tunis1" className="office_point">
    <ellipse className="block" cx="522.85" cy="541.25" fill="#285c5c" rx="3" ry="3" stroke="#285c5c"/>
    <circle className="block" cx="522.85" cy="541.25" fill="none" r="6" strokeWidth="1" stroke="transparent"/>
    <ellipse className="hidden" cx="522.85" cy="541.25" fill="#FF0000"  rx="3" ry="3" stroke="#FF0000"/>
    <circle className="hidden" cx="522.85" cy="541.25" fill="none" r="6" strokeWidth="1" stroke="#FF0000"/>
 </g>
 <g id="Tunis2" className="office_point">
    <ellipse className="block" cx="522.85" cy="541.25" fill="#285c5c" rx="3" ry="3" stroke="#285c5c"/>
    <circle className="block" cx="522.85" cy="541.25" fill="none" r="6" strokeWidth="1" stroke="transparent"/>
    <ellipse className="hidden" cx="522.85" cy="541.25" fill="#FF0000"  rx="3" ry="3" stroke="#FF0000"/>
    <circle className="hidden" cx="522.85" cy="541.25" fill="none" r="6" strokeWidth="1" stroke="#FF0000"/>
 </g>

 


</svg>


const createOfficeCard = (title: string, city: string, adress1: string, country: string, index: string, id: string, top: string): IOfficeCards => ({
    title,
    city,
    adress1,
    country,
    index,
    id,
    top,
  });
  
  const officeCardsData: IOfficeCards[] = [
    createOfficeCard("Tunis Office 1:", "Ariana", "Pôle Technologique", "Tunisia", "2083", "Tunis1", ""),
    createOfficeCard("Tunis Office 2:", "Ariana", "Rue André Ampère", "Tunisia", "2083", "Tunis2", ""),
    createOfficeCard("Switzerland Headquarter", "Lugano", "Via Cattedrale 7", "Switzerland", "6900", "Switzerland", "top-0"),
    createOfficeCard("Ukraine Office", "Zaporizhzhia", "Haharina St, 3", "Ukraine", "69061", "Ukraine", "top-0"),
    createOfficeCard("UK Office", "London", "16-18 Montagu Place", "United Kingdom", "W1H 2BQ", "UK Office", "top-0"),
    createOfficeCard("Partner's Office / UK office", "Cambridge", "St John's Innovation Centre", "United Kingdom", "CB4 0WS", "UK_partner", "top-0"),    
  ];

const element: IMaps = {

	name: "World",
	header: header,
	image: image,
	id: "world_all",
	officeCards: officeCardsData,
	
}

export default element

// "bg-primary-dark" 
// "bg-partner-office-color"