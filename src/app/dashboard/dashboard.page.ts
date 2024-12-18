import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit {

  // Properti untuk menyimpan data yang akan digunakan pada dashboard
  title: string = 'Dashboard Rute Evakuasi';
  features: Array<any> = [
    {
      title: 'Informasi Rute berdasarkan kepadatan penduduk',
      description: 'Informasi umum terkait rute yang dihubungkan dengan 2 titik'
    },
    {
      title: 'Peta Kepadatan Penduduk',
      description: 'Temukan Menunjukkan data kepadatan penduduk berasal dari data'
    },
    {
      title: 'Rekap Informasi Karbon',
      description: 'Analisis prediktif terhadap emisi karbon untuk mendukung pembangunan berkelanjutan.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Logic yang ingin dijalankan ketika komponen diinisialisasi
    console.log('DashboardPage initialized');
  }
}
