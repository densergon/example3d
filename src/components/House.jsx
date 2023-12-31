
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function House(props) {
  const { nodes, materials } = useGLTF('./models/autumn_house.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.House_roof_windows_01_lambert16_0.geometry} material={materials.lambert16} />
      <mesh geometry={nodes.House_roof_part_01_House_part01_mat_0.geometry} material={materials.House_part01_mat} />
      <mesh geometry={nodes.House_windows_02_lambert16_0.geometry} material={materials.lambert16} />
      <mesh geometry={nodes.House_roof_windows_02_lambert16_0.geometry} material={materials.lambert16} />
      <mesh geometry={nodes.polySurface529_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface522_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface527_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface523_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface521_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface525_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface524_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface517_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface516_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface515_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface520_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface518_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface224_House_part01_mat_0.geometry} material={materials.House_part01_mat} />
      <mesh geometry={nodes.polySurface220_House_part01_mat_0.geometry} material={materials.House_part01_mat} />
      <mesh geometry={nodes.polySurface219_House_part01_mat_0.geometry} material={materials.House_part01_mat} />
      <mesh geometry={nodes.polySurface223_House_part01_mat_0.geometry} material={materials.House_part01_mat} />
      <mesh geometry={nodes.polySurface222_House_part01_mat_0.geometry} material={materials.House_part01_mat} />
      <mesh geometry={nodes.polySurface221_House_part01_mat_0.geometry} material={materials.House_part01_mat} />
      <mesh geometry={nodes.polySurface387_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface355_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.House_beam_01_lambert16_0.geometry} material={materials.lambert16} />
      <mesh geometry={nodes.House_stairs_lambert16_0.geometry} material={materials.lambert16} />
      <mesh geometry={nodes.House_smallroof_02_lambert16_0.geometry} material={materials.lambert16} />
      <mesh geometry={nodes.House_door_lambert16_0.geometry} material={materials.lambert16} />
      <mesh geometry={nodes.House_beam_02_lambert16_0.geometry} material={materials.lambert16} />
      <mesh geometry={nodes.polySurface272_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface271_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface268_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface267_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface266_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface270_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface269_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface215_House_part01_mat_0.geometry} material={materials.House_part01_mat} />
      <mesh geometry={nodes.polySurface214_House_part01_mat_0.geometry} material={materials.House_part01_mat} />
      <mesh geometry={nodes.polySurface218_House_part01_mat_0.geometry} material={materials.House_part01_mat} />
      <mesh geometry={nodes.polySurface217_House_part01_mat_0.geometry} material={materials.House_part01_mat} />
      <mesh geometry={nodes.polySurface216_House_part01_mat_0.geometry} material={materials.House_part01_mat} />
      <mesh geometry={nodes.polySurface225_House_part01_mat_0.geometry} material={materials.House_part01_mat} />
      <mesh geometry={nodes.polySurface212_House_part01_mat_0.geometry} material={materials.House_part01_mat} />
      <mesh geometry={nodes.polySurface208_House_part01_mat_0.geometry} material={materials.House_part01_mat} />
      <mesh geometry={nodes.polySurface620_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface618_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface621_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface617_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface614_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface610_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface613_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface612_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface559_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface558_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface609_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface561_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface560_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface213_House_part01_mat_0.geometry} material={materials.House_part01_mat} />
      <mesh geometry={nodes.polySurface209_House_part01_mat_0.geometry} material={materials.House_part01_mat} />
      <mesh geometry={nodes.polySurface228_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface226_lambert16_0.geometry} material={materials.lambert16} />
      <mesh geometry={nodes.polySurface179_lambert16_0.geometry} material={materials.lambert16} />
      <mesh geometry={nodes.House_window_01_lambert16_0.geometry} material={materials.lambert16} />
      <mesh geometry={nodes.Garage_door_lambert16_0.geometry} material={materials.lambert16} />
      <mesh geometry={nodes.House_base_House_part01_mat_0.geometry} material={materials.House_part01_mat} />
      <mesh geometry={nodes.polySurface363_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface362_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface365_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface364_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface361_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface510_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface509_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface573_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface557_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface556_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface555_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface571_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface569_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface502_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface501_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface551_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface508_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface506_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface497_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface496_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface500_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface499_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface498_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface601_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface600_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface599_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface605_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface602_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface596_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface595_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface594_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface598_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface597_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface591_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface590_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface589_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface593_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface592_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface197_House_part01_mat_0.geometry} material={materials.House_part01_mat} />
      <mesh geometry={nodes.polySurface200_House_part01_mat_0.geometry} material={materials.House_part01_mat} />
      <mesh geometry={nodes.polySurface199_House_part01_mat_0.geometry} material={materials.House_part01_mat} />
      <mesh geometry={nodes.polySurface198_House_part01_mat_0.geometry} material={materials.House_part01_mat} />
      <mesh geometry={nodes.polySurface227_lambert16_0.geometry} material={materials.lambert16} />
      <mesh geometry={nodes.polySurface284_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface459_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface458_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface462_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface461_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface460_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface455_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface635_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.House_roof_part_02_lambert16_0.geometry} material={materials.lambert16} />
      <mesh geometry={nodes.House_windows_06_lambert16_0.geometry} material={materials.lambert16} />
      <mesh geometry={nodes.polySurface258_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface257_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface256_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface253_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface252_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface251_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface255_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface254_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface585_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface584_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface583_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface588_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface587_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface582_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface581_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface577_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface576_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface580_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface579_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface578_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface464_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface463_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface466_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface465_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface443_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface442_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface446_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface445_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface444_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface437_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface413_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface441_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface440_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface439_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.initialShadingGrouppolySurface116_polySurface3_lambert17_0.geometry} material={materials.lambert17} />
      <mesh geometry={nodes.polySurface360_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface636_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface238_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface575_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface547_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface546_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface545_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface549_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface544_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface543_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface631_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface630_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface634_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface633_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface632_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface626_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface625_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface629_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface628_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface627_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface616_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface615_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface624_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface623_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface622_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface608_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface607_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface606_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface512_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface511_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface505_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface514_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface513_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface451_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface450_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface449_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface504_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface503_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface448_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface447_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface539_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface530_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface542_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface541_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface540_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface566_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface565_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface574_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface568_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface567_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface564_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface563_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface562_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface240_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface239_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface232_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface229_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface233_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface248_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface250_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface249_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface244_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface243_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface246_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface245_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface281_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface279_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface282_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface275_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface274_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface278_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface277_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface276_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.House_beam_06_lambert16_0.geometry} material={materials.lambert16} />
      <mesh geometry={nodes.House_beam_05_lambert16_0.geometry} material={materials.lambert16} />
      <mesh geometry={nodes.House_windows_05_lambert16_0.geometry} material={materials.lambert16} />
      <mesh geometry={nodes.House_windows_04_lambert16_0.geometry} material={materials.lambert16} />
      <mesh geometry={nodes.polySurface397_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.House_veranda_lambert16_0.geometry} material={materials.lambert16} />
      <mesh geometry={nodes.polySurface637_lambert15_0.geometry} material={materials.lambert15} />
      <mesh geometry={nodes.polySurface638_lambert18_0.geometry} material={materials.lambert18} />
      <mesh geometry={nodes.polySurface491_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface490_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface494_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface493_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface492_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface489_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface488_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface487_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface484_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface483_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface482_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface486_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface485_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface479_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface478_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface477_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface481_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface480_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface265_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface264_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface260_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface259_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface263_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface262_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface261_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface470_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface469_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface468_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface476_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface471_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface467_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface453_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface398_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface396_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface401_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface400_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface399_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface392_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface391_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface395_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface394_lambert14_0.geometry} material={materials.lambert14} />
      <mesh geometry={nodes.polySurface393_lambert14_0.geometry} material={materials.lambert14} />
    </group>
  )
}

useGLTF.preload('./models/autumn_house.glb')
