// components/FilterSheet.tsx
import {
    View, Text, TouchableOpacity,
    Modal, ScrollView, StyleSheet
  } from 'react-native';
  import { TextInput } from 'react-native';
  import { useState } from 'react';
  import { Ionicons } from '@expo/vector-icons';
  
  const CITIES = ['Pune', 'Bangalore', 'Delhi', 'Hyderabad'];
  const TYPES = ['Buy', 'Rent'];
  const BHKS = ['1', '2', '3', '4+'];
  
  type FilterSheetProps = {
    visible: boolean;
    onClose: () => void;
   onApply: (filters: {
      type: string;
      bhks: string[];
      minPrice: string;
      maxPrice: string;
    }) => void
  };
  
  export default function FilterSheet({ visible, onClose, onApply }: FilterSheetProps) {
    const [selectedType, setSelectedType] = useState('Buy');
    const [selectedCities, setSelectedCities] = useState<string[]>([]);
    const [selectedBhks, setSelectedBhks] = useState<string[]>([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const toggle = (list: string[], setList: any, item: string) => {
      setList((prev: string[]) =>
        prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
      );
    };
  
    const handleClear = () => {
      setSelectedType('Buy');
      setSelectedBhks([]);
      setMinPrice('');
      setMaxPrice('');
    };
    const handleApply = () => {
      onApply({ type: selectedType, bhks: selectedBhks, minPrice, maxPrice });
      onClose();
    };

    const styles = StyleSheet.create({
      overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(15,23,42,0.4)',
      },
      sheet: {
        backgroundColor: '#F8FAFC',
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        maxHeight: '85%',
      },
      header: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E2E8F0',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
      },
      headerTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#0F172A',
      },
      closeBtn: {
        width: 32, height: 32,
        borderRadius: 8,
        backgroundColor: '#F1F5F9',
        alignItems: 'center',
        justifyContent: 'center',
      },
      body: {
        padding: 20,
        gap: 24,
      },
      section: {
        gap: 12,
      },
      sectionLabel: {
        fontSize: 11,
        fontWeight: '600',
        color: '#94A3B8',
        letterSpacing: 0.8,
        textTransform: 'uppercase',
      },
      chips: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
      },
      chip: {
        paddingHorizontal: 16,
        paddingVertical: 7,
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: '#E2E8F0',
        backgroundColor: '#FFFFFF',
      },
      chipActive: {
        backgroundColor: '#0F766E',
        borderColor: '#0F766E',
      },
      chipText: {
        fontSize: 13,
        fontWeight: '500',
        color: '#64748B',
      },
      chipTextActive: {
        color: '#FFFFFF',
      },
      bhkRow: {
        flexDirection: 'row',
        gap: 8,
      },
      bhkChip: {
        width: 52, height: 40,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#E2E8F0',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
      },
      bhkChipActive: {
        backgroundColor: '#F0FDF9',
        borderColor: '#0F766E',
      },
      bhkText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#64748B',
      },
      bhkTextActive: {
        color: '#0F766E',
      },
      footer: {
        flexDirection: 'row',
        gap: 10,
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#F1F5F9',
        backgroundColor: '#FFFFFF',
      },
      clearBtn: {
        flex: 1, padding: 13,
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: '#E2E8F0',
        alignItems: 'center',
      },
      clearText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#64748B',
      },
      applyBtn: {
        flex: 2, padding: 13,
        borderRadius: 12,
        backgroundColor: '#0F766E',
        alignItems: 'center',
      },
      applyText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#FFFFFF',
      },
      priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
      },
      priceInput: {
        flex: 1,
        gap: 6,
      },
      priceLabel: {
        fontSize: 11,
        fontWeight: '600',
        color: '#94A3B8',
        letterSpacing: 0.5,
      },
      input: {
        height: 44,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#E2E8F0',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 12,
        fontSize: 14,
        fontWeight: '500',
        color: '#0F172A',
      },
      priceDash: {
        width: 12,
        height: 2,
        backgroundColor: '#CBD5E1',
        borderRadius: 1,
        marginTop: 20,
      },
    });
  
    return (
      <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
        <View style={styles.overlay}>
          <View style={styles.sheet}>
  
            {/* Header */}
            <View style={styles.header}>
              <View style={{ width: 32 }} />
              <Text style={styles.headerTitle}>Filters</Text>
              <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
                <Ionicons name="close" size={18} color="#334155" />
              </TouchableOpacity>
            </View>
  
            <ScrollView contentContainerStyle={styles.body} showsVerticalScrollIndicator={false}>
  
              {/* Type */}
              <View style={styles.section}>
                <Text style={styles.sectionLabel}>Property type</Text>
                <View style={styles.chips}>
                  {TYPES.map(t => (
                    <TouchableOpacity
                      key={t}
                      style={[styles.chip, selectedType === t && styles.chipActive]}
                      onPress={() => setSelectedType(t)}
                    >
                      <Text style={[styles.chipText, selectedType === t && styles.chipTextActive]}>
                        {t}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
  
              {/* City */}
              <View style={styles.section}>
                <Text style={styles.sectionLabel}>City</Text>
                <View style={styles.chips}>
                  {CITIES.map(c => (
                    <TouchableOpacity
                      key={c}
                      style={[styles.chip, selectedCities.includes(c) && styles.chipActive]}
                      onPress={() => toggle(selectedCities, setSelectedCities, c)}
                    >
                      <Text style={[styles.chipText, selectedCities.includes(c) && styles.chipTextActive]}>
                        {c}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
              {/*Price*/}
              <View style={styles.section}>
             <Text style={styles.sectionLabel}>Price Range</Text>
             <View style={styles.priceRow}>
             <View style={styles.priceInput}>
             <Text style={styles.priceLabel}>Min</Text>
             <TextInput
              style={styles.input}
              placeholder="₹ 0"
              keyboardType="numeric"
              value={minPrice}
              onChangeText={setMinPrice}
              placeholderTextColor="#CBD5E1"
              />
            </View>
            <View style={styles.priceDash} />
            <View style={styles.priceInput}>
            <Text style={styles.priceLabel}>Max</Text>
            <TextInput
             style={styles.input}
             placeholder="₹ Any"
             keyboardType="numeric"
             value={maxPrice}
             onChangeText={setMaxPrice}
             placeholderTextColor="#CBD5E1"
             />
          </View>
          </View>
          </View>
              {/* BHK */}
              <View style={styles.section}>
                <Text style={styles.sectionLabel}>BHK</Text>
                <View style={styles.bhkRow}>
                  {BHKS.map(b => (
                    <TouchableOpacity
                      key={b}
                      style={[styles.bhkChip, selectedBhks.includes(b) && styles.bhkChipActive]}
                      onPress={() => toggle(selectedBhks, setSelectedBhks, b)}
                    >
                      <Text style={[styles.bhkText, selectedBhks.includes(b) && styles.bhkTextActive]}>
                        {b}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
  
            </ScrollView>
  
            {/* Footer */}
            <View style={styles.footer}>
              <TouchableOpacity style={styles.clearBtn} onPress={handleClear}>
                <Text style={styles.clearText}>Clear</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.applyBtn} onPress={handleApply}>
                <Text style={styles.applyText}>Apply Filters</Text>
              </TouchableOpacity>
            </View>
  
          </View>
        </View>
      </Modal>
    );
  }
  
 