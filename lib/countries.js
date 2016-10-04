function isNotAssigned( value ) {
  return /^A[P-Z0]/.test( value ) ||
    /^B[S-Z0]/.test( value ) ||
    /^C[S-Z0]/.test( value ) ||
    /^D[S-Z0]/.test( value ) ||
    /^E[L-Z0]/.test( value ) ||
    /^F[L-Z0]/.test( value ) ||
    /^G[A-Z0]/.test( value ) ||
    /^H[A-Z0]/.test( value ) ||
    /^M[S-Z0]/.test( value ) ||
    /^N[S-Z0]/.test( value ) ||
    /^P[S-Z0]/.test( value ) ||
    /^S[5-Z0]/.test( value ) ||
    /^T[2-Z0]/.test( value ) ||
    /^U[A-G]/.test( value ) ||
    /^U[1-4]/.test( value ) ||
    /^U[8-Z0]/.test( value ) ||
    /^Z[S-W]/.test( value ) ||
    /^Z[6-Z0]/.test( value ) ||
    /^6[X-Z0]/.test( value ) ||
    /^7[F-Z0]/.test( value ) ||
    /^8[3-Z0]/.test( value ) ||
    /^9[0-Z0]/.test( value )
}

module.exports = {
  'ZA': /^A[A-H]/,
  'CI': /^A[J-N]/,
  'AO': /^B[A-E]/,
  'KE': /^B[F-K]/,
  'TZ': /^B[L-R]/,
  'BJ': /^C[A-E]/,
  'MG': /^C[F-K]/,
  'TN': /^C[L-R]/,
  'EG': /^D[A-E]/,
  'MA': /^D[F-K]/,
  'ZM': /^D[L-R]/,
  'ET': /^E[A-E]/,
  'NZ': /^E[F-K]/,
  'GH': /^F[A-E]/,
  'NG': /^F[F-K]/,
  'JP': /^J[A-Z0]/,
  'LK': /^K[A-E]/,
  'IL': /^K[F-K]/,
  'KR': /^K[L-R]/,
  'KZ': /^K[S-Z0]/,
  'CN': /^L[A-Z0]/,
  'IN': /^M[A-E]/,
  'ID': /^M[F-K]/,
  'TH': /^M[L-R]/,
  'IR': /^N[A-E]/,
  'PK': /^N[F-K]/,
  'TR': /^N[L-R]/,
  'PH': /^P[A-E]/,
  'SG': /^P[F-K]/,
  'MY': /^P[L-R]/,
  'AE': /^R[A-E]/,
  'TW': /^R[F-K]/,
  'VN': /^R[L-R]/,
  'SA': /^R[S-Z0]/,
  'GB': /^S[A-M]/,
  'DE': /^(S[N-T])|(W[A-Z0])/, // East & West Germany
  'PL': /^S[U-Z]/,
  'LV': /^S[1-4]/,
  'CH': /^T[A-H]/,
  'CZ': /^T[J-P]/,
  'HU': /^T[R-V]/,
  'PT': /^T[W-Z0-1]/,
  'DK': /^U[H-M]/,
  'IE': /^U[N-T]/,
  'RO': /^U[U-Z]/,
  'SK': /^U[5-7]/,
  'AT': /^V[A-E]/,
  'FR': /^V[F-R]/,
  'ES': /^V[S-W]/,
  'RS': /^V[X-Z0-2]/,
  'HR': /^V[3-5]/,
  'EE': /^V[6-Z0]/,
  'BG': /^X[A-E]/,
  'GR': /^X[F-K]/,
  'NL': /^X[L-R]/,
  'RU': /^(X[S-W])|(X[3-Z0])/, // Russia & USSR
  'LU': /^X[X-Z0-2]/,
  'BE': /^Y[A-E]/,
  'FI': /^Y[F-K]/,
  'MT': /^Y[L-R]/,
  'SE': /^Y[S-W]/,
  'NO': /^Y[X-Z0-2]/,
  'BY': /^Y[3-5]/,
  'UA': /^Y[6-Z0]/,
  'IT': /^Z[A-R]/,
  'SI': /^Z[X-Z0-2]/,
  'LT': /^Z[3-5]/,
  'US': /^(1[A-Z0])|(4[A-Z0])|(5[A-Z0])/,
  'CA': /^2[A-Z0]/,
  'MX': /^3[A-Z0-7]/,
  'KY': /^3[8-Z0]/,
  'AU': /^6[A-W]/,
  'NZ': /^7[A-E]/,
  'AR': /^8[A-E]/,
  'CL': /^8[F-K]/,
  'EC': /^8[L-R]/,
  'PE': /^8[S-W]/,
  'VE': /^8[X-Z0-2]/,
  'BR': /^9[A-E]/,
  'CO': /^9[F-K]/,
  'PY': /^9[L-R]/,
  'UY': /^9[S-W]/,
  'TT': /^9[X-Z0-2]/,
  'BR': /^9[3–9]/,
}
