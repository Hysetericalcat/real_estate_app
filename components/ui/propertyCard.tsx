import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
// relativepathe string -> combination of types

type Properties = {
    tag:string,
    price:string,
    bhk:string,
    location:string,
    title:string,
    imageuri:string,
    type:string
    id:string
}
export default function PropertyCard(props: Properties){
    const styles = StyleSheet.create({
        card: {
          backgroundColor: '#FFFFFF',
          borderRadius: 20,
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: '#E2E8F0',
          marginBottom: 16,
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 2 },
          elevation: 3,
        },
        imgContainer: {
          height: 200,
        },
        image: {
          width: '100%',
          height: '100%',
        },
        overlay: {
          ...StyleSheet.absoluteFillObject,
          backgroundColor: 'rgba(0,0,0,0.22)',
        },
        tagBadge: {
          position: 'absolute',
          top: 12,
          left: 12,
          backgroundColor: '#0F766E',
          paddingHorizontal: 10,
          paddingVertical: 4,
          borderRadius: 20,
        },
        tagText: {
          fontSize: 11,
          fontWeight: '600',
          color: '#FFFFFF',
        },
        saveBtn: {
          position: 'absolute',
          top: 12,
          right: 12,
          width: 32,
          height: 32,
          borderRadius: 16,
          backgroundColor: 'rgba(255,255,255,0.88)',
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: 'rgba(0,0,0,0.08)',
        },
        typeChip: {
          position: 'absolute',
          bottom: 12,
          left: 12,
          backgroundColor: 'rgba(255,255,255,0.9)',
          paddingHorizontal: 10,
          paddingVertical: 3,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: '#0F766E',
        },
        typeText: {
          fontSize: 11,
          fontWeight: '600',
          color: '#0F766E',
        },
        body: {
          padding: 14,
          backgroundColor: '#FFFFFF',
        },
        price: {
          fontSize: 22,
          fontWeight: '700',
          color: '#0F172A',
          marginBottom: 4,
        },
        title: {
          fontSize: 14,
          fontWeight: '500',
          color: '#334155',
          marginBottom: 6,
        },
        locationRow: {
          flexDirection: 'row',
          alignItems: 'center',
          gap: 4,
          marginBottom: 14,
        },
        locationText: {
          fontSize: 12,
          color: '#94A3B8',
          flex: 1,
        },
        bhk: {
          fontSize: 13,
          fontWeight: '600',
          color: '#1E293B',
        },
        divider: {
          height: 1,
          backgroundColor: '#F1F5F9',
          marginBottom: 12,
          marginTop: 8,
        },
        viewBtn: {
            backgroundColor: '#0F766E',
            borderRadius: 12,
            paddingVertical: 13,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
          },
          viewBtnText: {
            fontSize: 14,
            fontWeight: '600',
            color: '#FFFFFF',
            letterSpacing: 0.3,
          },
      });;
      return (
        <TouchableOpacity 
        style={styles.card}
        activeOpacity={0.92}
        onPress={() => router.push(`/property/${props.id}`as any) } > 
        
    
          <View style={styles.imgContainer}>
            <Image source={{ uri: props.imageuri }} style={styles.image} />
            <View style={styles.overlay} />
    
            <View style={styles.tagBadge}>
              <Text style={styles.tagText}>{props.tag}</Text>
            </View>
    
            <TouchableOpacity style={styles.saveBtn}>
              <Ionicons name="bookmark-outline" size={15} color="#0F766E" />
            </TouchableOpacity>
    
            <View style={styles.typeChip}>
              <Text style={styles.typeText}>For {props.type}</Text>
            </View>
          </View>
    
          <View style={styles.body}>
            <Text style={styles.price}>{props.price}</Text>
            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
    
            <View style={styles.locationRow}>
              <Ionicons name="location-outline" size={13} color="#94A3B8" />
              <Text style={styles.locationText} numberOfLines={1}>{props.location}</Text>
            </View>
    
            <View style={styles.divider} />
            <Text style={styles.bhk}>{props.bhk}</Text>
            <View>

            </View>
          </View>
    
        </TouchableOpacity>
      );
}